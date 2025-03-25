export interface IEmployee {
  firstName: string; // Employee's first name
  lastName: string;  // Employee's last name
  role: {label: string, value: string};      // Employee's role (e.g., "JOURNALISTE", "REALISATEUR")
  disponibilite: string; // Employee's availability or status
}