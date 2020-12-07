import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);
  })

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      provider_id: '1234512',
      user_id: '12341234',
      date: new Date()
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1234512');
  });

  it('should not be able to create two appointment on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      provider_id: '1234512',
      user_id: '12341234',
      date: appointmentDate
    });

    await expect(
      createAppointment.execute({
        provider_id: '1234512',
        user_id: '12341234',
        date: appointmentDate
      })
    ).rejects.toBeInstanceOf(AppError)
  });
});
