const { CityRepository } = requre('../repository/index')

class CitySrvice {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;   
        } catch (error) {
            console.log("Soomething went wrong at service layer")
            throw {error};
        }
    }

    async deleteCity(data){
        try {
            const city = await this.cityRepository.deleteCity(data);
        } catch (error) {
            console.log("Soomething went wrong at service layer")
            throw {error};
        }
    }

    async updateCity(data){
        try {
            const city = await this.cityRepository.updateCity(data);
        } catch (error) {
            console.log("Soomething went wrong at service layer")
            throw {error};
        }
    }
    async getCity(data){
        try {
            const city = await this.cityRepository.updateCity(data);
        } catch (error) {
            console.log("Soomething went wrong at service layer")
            throw {error};
        }
    }
}