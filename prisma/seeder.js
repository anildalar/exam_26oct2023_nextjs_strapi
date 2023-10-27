//1. Import area
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//2. Defination area
async function main(){
    //await 
    console.log('Hurrey!');
                 //= AOO
    const subjects = [
                        {
                            //1. Property:Value
                            name:"Economics"
                        },
                        {
                            //1. Property:Value
                            name:"JAVA"    
                        },
                        {
                             //1. Property:Value
                            name:"English"
                        }
                    ];
    for (subject of subjects) {
        // code block to be executed
        await prisma.subject2.create({
            //1. Property:Value
            data:subject
        });
    }

    await prisma.$disconnect();
}

//calling/invoke
//PO 
//PO.then().then().catch((e)=>{}).finally();
//PO.catch((e)=>{});
main().catch((e)=>{
    throw e;
});


//3. Export