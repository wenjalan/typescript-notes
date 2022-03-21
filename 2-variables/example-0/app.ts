// explicitly type a variable
const firstName: string = 'Alan';

// implicitly type a variable
const lastName = 'Wen';

// a typed function
function greeting(firstName: string, lastName: string): void {
    console.log(`Hi ${firstName} ${lastName}!`);
}
greeting(firstName, lastName);

// typed anonymous function
const names = ['alan', 'james', 'wen'];
names.forEach((s: string): boolean => {
    console.log(s.toUpperCase());
    return true;
});

