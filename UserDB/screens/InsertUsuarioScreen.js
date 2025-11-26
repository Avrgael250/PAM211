import { useEffect, useState, useCallback } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, Alert, ActivityIndicator, Platform
} from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function UsuarioView() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [editando, setEditando] = useState(null); // Usuario en edición

  // SELECT - Cargar usuarios desde la BD
  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Inicializar y cargar datos
  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();
    // Avisar los cambios automáticos
    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  // INSERT - Agregar nuevo usuario
  const handleAgregar = async () => {
    if (guardando) return;
    try {
      setGuardando(true);
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert('Usuario creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  // UPDATE - Actualizar usuario existente
  const handleActualizar = async () => {
    if (guardando || !editando) return;
    try {
      setGuardando(true);
      await controller.actualizarUsuario(editando.id, nombre);
      Alert.alert('Éxito', `Usuario "${nombre}" actualizado correctamente`);
      cancelarEdicion();
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  // DELETE - Eliminar usuario
  const handleEliminar = (usuario) => {
    Alert.alert(
      'Confirmar eliminación',
      `¿Estás seguro de eliminar a "${usuario.nombre}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await controller.eliminarUsuario(usuario.id);
              Alert.alert('Éxito', 'Usuario eliminado correctamente');
            } catch (error) {
              Alert.alert('Error', error.message);
            }
          }
        }
      ]
    );
  };

  // Preparar edición
  const iniciarEdicion = (usuario) => {
    setEditando(usuario);
    setNombre(usuario.nombre);
  };

  // Cancelar edición
  const cancelarEdicion = () => {
    setEditando(null);
    setNombre('');
  };

  // Renderizar cada usuario
  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion || item.fecha_creacion).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </View>
      <View style={styles.botonesAccion}>
        <TouchableOpacity
          style={styles.botonEditar}
          onPress={() => iniciarEdicion(item)}
        >
          <Text style={styles.botonAccionTexto}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonEliminar}
          onPress={() => handleEliminar(item)}
        >
          <Text style={styles.botonAccionTexto}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CRUD COMPLETO</Text>
        <Text style={styles.headerSubtitle}>
          {Platform.OS === 'web' ? 'WEB (LocalStorage)' : 'MÓVIL (SQLite)'}
        </Text>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>
          {editando ? `Editando: ${editando.nombre}` : 'Insertar Usuario'}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        <View style={styles.botonesFormulario}>
          {editando ? (
            <>
              <TouchableOpacity
                style={[styles.botonGuardar, styles.botonActualizar, guardando && styles.botonDeshabilitado]}
                onPress={handleActualizar}
                disabled={!nombre.trim() || guardando}
              >
                {guardando ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.botonTexto}>Actualizar</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botonCancelar}
                onPress={cancelarEdicion}
                disabled={guardando}
              >
                <Text style={styles.botonTexto}>Cancelar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.botonGuardar, guardando && styles.botonDeshabilitado]}
              onPress={handleAgregar}
              disabled={!nombre.trim() || guardando}
            >
              {guardando ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.botonTexto}>Agregar Usuario</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.listaContainer}>
        <View style={styles.listaHeader}>
          <Text style={styles.subtitulo}>Lista de Usuarios</Text>
          <TouchableOpacity onPress={cargarUsuarios}>
            <Text style={styles.recargarBtn}>Recargar</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={{ padding: 20, alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#5b9aff" />
          </View>
        ) : (
          <FlatList
            data={usuarios}
            renderItem={renderUsuario}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.lista}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No hay usuarios registrados</Text>
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#e8e8e8',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 2,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  formulario: {
    backgroundColor: 'white',
    padding: 20,
    margin: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  listaContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 15,
    marginTop: 0,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  recargarBtn: {
    color: '#5b9aff',
    fontSize: 14,
    fontWeight: '500',
  },
  lista: {
    padding: 15,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
    fontSize: 16,
  },
  botonGuardar: {
    backgroundColor: '#5b9aff',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  botonDeshabilitado: {
    backgroundColor: '#aaa',
  },
  botonTexto: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#5b9aff',
    alignItems: 'center',
  },
  userNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5b9aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userNumberText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  userId: {
    fontSize: 13,
    color: '#5b9aff',
    marginBottom: 3,
  },
  userDate: {
    fontSize: 12,
    color: '#999',
  },
  botonesFormulario: {
    flexDirection: 'row',
    gap: 10,
  },
  botonActualizar: {
    flex: 1,
    backgroundColor: '#FF9800',
  },
  botonCancelar: {
    flex: 1,
    backgroundColor: '#757575',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  botonesAccion: {
    flexDirection: 'row',
    gap: 8,
  },
  botonEditar: {
    backgroundColor: '#FF9800',
    padding: 10,
    borderRadius: 6,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonEliminar: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 6,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonAccionTexto: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
  },
});
