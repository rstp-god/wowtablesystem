export default class StringInTables  {
    TableEnum = ['carajan','magterion','naxxaramas','gruullair']; 
    _apiURL ='http://sundancex.ru/api'; 

    async createNewString(raid,json) {
        const response = await fetch(`${this._apiURL}/${this.TableEnum[raid]}-table`,{ 
            method: 'POST', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        });   
        return response.json(); 
    }
}