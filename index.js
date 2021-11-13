function divider(input)
{
    console.log("\n" + "=".repeat(20), input, "=".repeat(20), "\n");
}

divider ('Task 1 ');

for(let i=1; i<=20;i++)
{
    let zahl = Math.random()*10;
    console.log(Math.round(zahl*100)/100);
    if(zahl>5 && zahl < 7)
    {
        console.log('ich komme die Condition: Oooops');
        i=20
    }
}

divider ('Task 2 ');

let geburtsJahr = 1995;


for(let i = 2020; i >= geburtsJahr; i--)
{
    i == geburtsJahr ? console.log(`Mein Geburtsjahr ist :${i}`): console.log(`${i}`); 
}

divider ('Task 3 ');

let stunde = 24;
let minuten = 60;

for(let i = 0; i < stunde; i++)
{
    for(let j = 0; j < minuten; j++)
    {
       
        if( j < 10 )
        {
            console.log(`Es ist ${i}:0${j}`)
        }
        else
        {
            console.log(`Es ist ${i}:${j}`);
        }
    }
}