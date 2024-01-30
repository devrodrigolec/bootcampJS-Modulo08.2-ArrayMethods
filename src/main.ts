import { pacientes, Pacientes, NumeroPacientesPorEspecialidad } from "./modelo";

/* Apartado 1
a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría */

const obtenPacientesAsignadosAPediatria: Pacientes[] = pacientes.filter(
  (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
);

console.log({ pacientesDePediatria: obtenPacientesAsignadosAPediatria });

/* b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años. */

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios: Pacientes[] =
  obtenPacientesAsignadosAPediatria.filter(
    (paciente: Pacientes): boolean => paciente.edad < 10
  );

console.log({
  pacientesDePedriatriaMenoresDe10Anios:
    obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
});

/* Apartado 2
Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como: */

const activarProtocoloUrgencia: boolean = pacientes.some(
  (paciente: Pacientes): boolean =>
    paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
);

console.log({ activarProtocoloUrgencia });

/* Apartado 3
El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia. */

const reasignaPacientesAMedicoFamilia: Pacientes[] =
  obtenPacientesAsignadosAPediatria.map((paciente: Pacientes) => ({
    ...paciente,
    especialidad: "Medico de familia",
  }));

console.log({
  pacientesDePediatriaReasignadosAMedicoDeFamilia:
    reasignaPacientesAMedicoFamilia,
});

/* Apartado 4
 Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría */

const hayPacientesDePedriatria: boolean = pacientes.some(
  (paciente: Pacientes) => paciente.especialidad === "Pediatra"
);

console.log({ hayPacientesDePedriatria });

/* Apartado 5
Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología */

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const pacientesCardiologia: number = pacientes.reduce(
    (acc: number, paciente: Pacientes) =>
      paciente.especialidad === "Cardiólogo" ? (acc += 1) : acc,
    0
  );
  const pacientesMedicoDeFamilia: number = pacientes.reduce(
    (acc: number, paciente: Pacientes) =>
      paciente.especialidad === "Medico de familia" ? (acc += 1) : acc,
    0
  );
  const pacientesPediatria: number = pacientes.reduce(
    (acc: number, paciente: Pacientes) =>
      paciente.especialidad === "Pediatra" ? (acc += 1) : acc,
    0
  );

  return {
    cardiologia: pacientesCardiologia,
    medicoDeFamilia: pacientesMedicoDeFamilia,
    pediatria: pacientesPediatria,
  };
};


const cantidadDePacientesPorEspecialidad : NumeroPacientesPorEspecialidad = cuentaPacientesPorEspecialidad(pacientes);

console.log({cantidadDePacientesPorEspecialidad});
