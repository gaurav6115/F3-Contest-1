//Fetch the api
async function fetchApiData() {
    const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    const response = await fetch(apiUrl);
    console.log(response);

    const data = await response.json();
    return data;
}

//Select the table
let table = document.getElementById("tbody");


//Create the table
async function tableData() {
    const res = await fetchApiData();
    console.log(res);

    res.map((value) => {
        let trow = document.createElement("tr");
        trow.innerHTML = `<td align="left"><img align="center" width = "25px" src ="${value.image}">&nbsp; ${value.name}</td>
                        <td align="left">${value.symbol.toUpperCase()}</td>
                        <td>$${value.current_price}</td>                      
                        <td>$${value.total_volume}</td>
                        <td width ="150px"class="${value.price_change_percentage_24h > 0 ? "positiveValues" : "negativeValues"}">${Number(value.price_change_percentage_24h).toFixed(2)}%</td>
                        <td>Mkt Cap : $${value.market_cap}</td>`
//Append the created row in the table
        table.append(trow);
    })
}

//Call the function
tableData();