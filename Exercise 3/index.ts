//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName:string="mUHAMMAD shamooN Butt"
//Name in lowercase
let lowercase:string=personName.toLowerCase();
console.log(lowercase)
//Name in lowercase
let uppercase:string=personName.toUpperCase();
console.log(uppercase) 
//Name in titlecase
let words:string[]=personName.split(" ");
let titlecase:string=""
for (let i=0;i<words.length;i++){titlecase+=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};
console.log(titlecase)