interface IObserver {
  notify(): void;
}
class MonitoringSystem {
  private observers: IObserver[];
  BodyTempreture: number;
  BodyPressure: number;
  HeartRate: number;
  RepiratoryRate: number;
  BloodSugar: number;

  constructor(
    BodyTempreture: number,
    BodyPressure: number,
    HeartRate: number,
    RepiratoryRate: number,
    BloodSugar: number
  ) {
    this.BodyTempreture = BodyTempreture;
    this.BodyPressure = BodyPressure;
    this.HeartRate = HeartRate;
    this.BloodSugar = BloodSugar;
    this.RepiratoryRate = RepiratoryRate;
  }
  notifyHospitalstuff() {
    if (
      this.BodyTempreture > 37 ||
      this.BodyPressure > 90 ||
      this.HeartRate > 100 ||
      this.BloodSugar > 130 ||
      this.RepiratoryRate > 20
    ) {
      this.observers.forEach((observer) => observer.notify());
    }
  }
  addObserver(observer: IObserver) {
    this.observers.push(observer);
  }
}

class Patient {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  notify(): void {
    {
      console.log(`${this.name}, check your Monitoring system!`);
    }
  }
}

class Doctor implements IObserver {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  notify(): void {
    console.log(`${this.name}, check the monitoring system!`);
  }
}

class Caregiver implements IObserver {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  notify(): void {
    console.log(`${this.name}, check the monitoring system!`);
  }
}

class Nurse implements IObserver {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  notify(): void {
    console.log(`${this.name}, check the monitoring system!`);
  }
}
const MSystem = new MonitoringSystem(37,90,100,130,20)
const john = new Patient('John')
const jack = new Patient('Jack')
const ahmed = new Doctor('ahmed')
const nodhal = new Caregiver('nodhal')
const amira=new Nurse ("Amira")

MSystem.addObserver(john)
MSystem.addObserver(jack)
MSystem.addObserver(amira)
MSystem.addObserver(nodhal)
MSystem.addObserver(ahmed)
MSystem.notifyHospitalstuff()