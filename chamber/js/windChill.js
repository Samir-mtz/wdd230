function windchill(temperature, speed){
    if(speed>3.0 && temperature<=50){
        return 35.74 + (0.6215*temperature)-(35.75*(speed**0.16)) + (0.4275*temperature*(speed**0.16))
    }else{
        return "N/A"
    }
}