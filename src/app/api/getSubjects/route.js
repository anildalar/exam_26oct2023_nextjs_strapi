//1. Import area

let url = process.env.STRAPI_URL;
//2 Defination area
async function GET(request) {

    //fetch().then().then().catch().finally();
    let response = await fetch(url+'/api/subjects',{
            headers: {
                'Content-Type': 'application/json',
            }
        });
    //Every function return some
        // Object.method(actualArguemtn)

    let data = await response.json();//Make our data json redable

    return Response.json({ msg:data })
}



//3. Export area

//3.2 Named Export
module.exports = { GET }; 
