export default class RaidService { 
    TableEnum = ['carajan','magterion','naxxaramas','gruullair']; 
    _apiURL ='http://sundancex.ru/api'; 


    createNewRaid = async (raid,json) => {
        const response = await fetch(`${this._apiURL}/${this.TableEnum[raid]}`,{ 
            method: 'POST', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });   
        return response.json(); 
    }

    getRaidsByNickname = async (raid,nickname) => {
        const response = await fetch(`${this._apiURL}/${this.TableEnum[raid]}/${nickname}`,{ 
            method: 'GET', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            },
        });   
        return await response.json(); 
    }

    deleteRaid = async (raid,id) => { 
        const response = await fetch(`${this._apiURL}/${this.TableEnum[raid]}/${id}`,{ 
            method: 'DELETE', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            },
        });   
        return await response.json(); 
    }
}

