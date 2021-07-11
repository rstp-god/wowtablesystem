export default class StringInTables  {
    TableEnum = ['carajan','magterion','naxxaramas','gruullair']; 
    _apiURL ='http://sundancex.ru/api'; 

    createNewString = async (raid,json) => {
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

    getAllStrings = async (raid) => {
        const response = await fetch(`${this._apiURL}/${this.TableEnum[raid]}-table`, {
            method: 'GET',
            mode: 'cors', 
            headers: { 
                'Content-Type': 'application/json'
            }
        });
        return response.json(); 
    }

    getByNicknameAndUUID = async (raid,nickname,uuid) => {
        const response = await fetch(`${this._apiURL}/${this.TableEnum[raid]}-table/query?url=${uuid}&RLnickname=${nickname}`, { 
            method: 'GET',
            mode: 'cors', 
            headers: {
                'Content-type': 'application/json'
            }
        });
        return response.json();
    }

    getByNickname = async (raid,nickname) => {
        const response = await fetch(`${this._apiURL}/${this.TableEnum[raid]}-table/${nickname}`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        });
        return response.json();
    }
}