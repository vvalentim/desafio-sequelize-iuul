import { MainMenu } from "./menus/MainMenu.js";
import { AppointmentsMenu } from "./menus/AppointmentsMenu.js";
import { PatientsMenu } from "./menus/PatientsMenu.js";

const patientsMenu = new PatientsMenu();
const appointmentsMenu = new AppointmentsMenu();
const main = new MainMenu(patientsMenu, appointmentsMenu);

main.run();
