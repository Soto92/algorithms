class PhoneHashTable {
    private table: { [key: string]: string };

    constructor() {
        this.table = {};
    }

    addContact(name: string, phoneNumber: string): void {
        this.table[name] = phoneNumber;
    }

    editContact(name: string, newPhoneNumber: string): void {
        if (this.table.hasOwnProperty(name)) {
            this.table[name] = newPhoneNumber;
        } else {
            console.log(`${name} not found in the phone list.`);
        }
    }

    deleteContact(name: string): void {
        if (this.table.hasOwnProperty(name)) {
            delete this.table[name];
            console.log(`${name} has been deleted from the phone list.`);
        } else {
            console.log(`${name} not found in the phone list.`);
        }
    }

    listContacts(): void {
        console.log("Phone List:");
        for (const [name, phoneNumber] of Object.entries(this.table)) {
            console.log(`${name}: ${phoneNumber}`);
        }
    }
}

const phoneList = new PhoneHashTable();

phoneList.addContact("John Doe", "123-456-7890");
phoneList.addContact("Jane Smith", "987-654-3210");

phoneList.listContacts();

phoneList.editContact("John Doe", "555-555-5555");
phoneList.listContacts();

phoneList.deleteContact("Jane Smith");
phoneList.listContacts();
