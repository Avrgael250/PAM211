
import javax.swing.*;
import javax.swing.JFrame;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


class inicioPAM
{
public String ReglamentoPOO() {
   return "Reglamento POO: \n" +
            "1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n" + //
            "2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de\r\n" + //
            "inicio:7:00a.m y 14:00 p.m).\n" + //
            "3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\n" + //
            "justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al\n" + //
            "tutor para ser validados y de forma posterior emitidos).\n" + //
            "4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)\n" + //
            "5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.\n" + //
            "6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\r\n" + //
            "7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.\n" + //
            "8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final\r\n" + //
            "9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará\n" + //
            "una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.\n" + //
            "10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.\n" + //
            "11. Prohibido el uso de audífonos durante la clase.\n" + //
            "12. Prohibido comer y/o tomar líquidos en el salón.\n" + //
            "13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\n" + //
            "14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación\n" + //
            "de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\n" + //
            "15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\n" + //
            "16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación\n" + //
            "17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el\n" + //
            "50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.";
}
public String LineamientosClassroom()
{
   return "Lineamientos Classroom: \n" + 
   "Entregar los trabajos para su revisión \n" +
   "Entregas a PDF \n" +
   "Avisos clase \n" +
   "Entregas autorizadas con retraso, 5 Calif Max \n";
}

public String FechasParciales()
{
   return "Fechas de Parciales: \n" +
   "Parcial 1: 29-09-25 \n" +
   "Parcial 2: 03-11-25 \n" +
   "Parcial 3: 01-12-25 \n" +
   "Examen Final: 08-12-25 \n";
}

public String PorcentajesParcial()
{
   return "Porcentajes de Parciales: \n" +
   "Parcial 1: \n" +
   "Conocimiento: 40% \n" +
   "Desempeño: 20% \n" +
   "Producto: 30% \n" +
   "Proyecto Integrador: 10% \n" +
   "Parcial 2: \n" +
   "Conocimiento: 40% \n" +
   "Desempeño: 20% \n" +
   "Producto: 20% \n" +
   "Proyecto Integrador: 20% \n" +
   "Parcial 3: \n" +
   "Conocimiento: 20% \n" +
   "Desempeño: 10% \n" +
   "Producto: 40% \n" +
   "Proyecto Integrador: 30% \n";

}
}

public class MateriaApp 
{
   public static void main(String[] args)
   {
      JFrame frame = new Frame("Materia POO");
      frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      frame.setSize(350, 300);
   }
}

