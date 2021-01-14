function mostrarobjetos(){
    var vehiculos=new Array();
    var toyota=new Object();
    toyota.clasificacion="Camry Berlina mediana o grande";
    toyota.tamaño="L x A x A: 3940 x 1745 x 1470";
    toyota.modelo="Toyota Aygo. 3 puertas. 5 puertas. 5 puertas x-sky.r";
    toyota.color="rojo";
    toyota.motor="Tipo A era un motor straight-6";
    toyota.propietario="Toyota Industries y Nippon Life Insurance Company";
    toyota.fundador="Kiichiro Toyoda";

    var Volkswagen=new Object();
    Volkswagen.clasificacion="Volkswagen Amarok";
    Volkswagen.tamaño="4.406-4.876";
    Volkswagen.modelos=" gol";
    Volkswagen.color="blanco";
    Volkswagen.motor="Motor (vers. 1.192 c.c. de 1.954)";
    Volkswagen.propietario="Porsche Automobil Holding SE, Qatar Investment Authority y Hannoversche Beteiligungsgesellschaft";
    Volkswagen.fundador="Deutsche Arbeitsfront";

    var Ford=new Object();
    Ford.clasificacion=" A  .Aeronaves";
    Ford.tamaño="1.735 (1.941)";
    Ford.modelos="Pick-ups";
    Ford.color="rojo";
    Ford.motor="Since 1903";
    Ford.propietario="The Vanguard Group (5,82%)";
    Ford.fundador="Henry Ford";


    var Honda=new Object();
    Honda.clasificacion="Automóviles de competición de Honda‎";
    Honda.tamaño="L x A x A: 3894 x 1752 x 1512";
    Honda.modelo="Honda e";
    Honda.color="plomo";
    Honda.motor="diesel";
    Honda.propietario="Hamamatsu";
    Honda.fundador="Sōichirō Honda";

    var Nissan=new Object();
    Nissan.clasificacion="Nissan 260Z";
    Nissan.tamaño="4.560";
    Nissan.modelo="Nissan Micra. Micra.";
    Nissan.color="rojo";
    Nissan.motor="DOHC";
    Nissan.propietario="Renault";
    Nissan.fundador="Yoshisuke Aikawa";

    var Hyundai=new Object();
    Hyundai.clasificacion="Automóviles de competición de Honda‎";
    Hyundai.tamaño="L x A x A: 3894 x 1752 x 1512";
    Hyundai.modelo="Hyundai e";
    Hyundai.color="plomo";
    Hyundai.motor="diesel";
    Hyundai.propietario="Hamamatsu";
    Hyundai.fundador="Sōichirō Honda";

    var Chevrolet=new Object();
    Chevrolet.clasificacion="Automóviles de competición de Honda‎";
    Chevrolet.tamaño="L x A x A: 3894 x 1752 x 1512";
    Chevrolet.modelo="Chevrolet e";
    Chevrolet.color="plomo";
    Chevrolet.motor="diesel";
    Chevrolet.propietario="Hamamatsu";
    Chevrolet.fundador="Sōichirō Honda";

    var  Kia=new Object();
     Kia.clasificacion="Automóviles de competición de Honda‎";
     Kia.tamaño="L x A x A: 3894 x 1752 x 1512";
     Kia.modelo=" Kia e";
     Kia.color="plomo";
     Kia.motor="diesel";
     Kia.propietario="Hamamatsu";
     Kia.fundador="Sōichirō Honda";

    var Mercedes=new Object();
    Mercedes.clasificacion="Automóviles de competición de Honda‎";
    Mercedes.tamaño="L x A x A: 3894 x 1752 x 1512";
    Mercedes.modelo="Mercedes benxs e";
    Mercedes.color="plomo";
    Mercedes.motor="diesel";
    Mercedes.propietario="Hamamatsu";
    Mercedes.fundador="Sōichirō Honda";

    var BMW=new Object();
    BMW.clasificacion="Automóviles de competición de Honda‎";
    BMW.tamaño="L x A x A: 3894 x 1752 x 1512";
    BMW.modelo="BMW e";
    BMW.color="plomo";
    BMW.motor="diesel";
    BMW.propietario="Hamamatsu";
    BMW.fundador="Sōichirō Honda";

    var Renault=new Object();
    Renault.clasificacion="Automóviles de competición de Honda‎";
    Renault.tamaño="L x A x A: 3894 x 1752 x 1512";
    Renault.modelo="Renault e";
    Renault.color="plomo";
    Renault.motor="diesel";
    Renault.propietario="Hamamatsu";
    Renault.fundador="Sōichirō Honda";

    var Audi=new Object();
    Audi.clasificacion="Automóviles de competición de Honda‎";
    Audi.tamaño="L x A x A: 3894 x 1752 x 1512";
    Audi.modelo="Audi e";
    Audi.color="plomo";
    Audi.motor="diesel";
    Audi.propietario="Hamamatsu";
    Audi.fundador="Sōichirō Honda";


    
    
    var  Maruti=new Object();
     Maruti.clasificacion="Automóviles de competición de Honda‎";
     Maruti.tamaño="L x A x A: 3894 x 1752 x 1512";
     Maruti.modelo=" Maruti e";
     Maruti.color="plomo";
     Maruti.motor="diesel";
     Maruti.propietario="Hamamatsu";
     Maruti.fundador="Sōichirō Honda";
    
    var Peugeot=new Object();
    Peugeot.clasificacion="Automóviles de competición de Honda‎";
    Peugeot.tamaño="L x A x A: 3894 x 1752 x 1512";
    Peugeot.modelo="Peugeot e";
    Peugeot.color="plomo";
    Peugeot.motor="diesel";
    Peugeot.propietario="Hamamatsu";
    Peugeot.fundador="Sōichirō Honda";

    var Mazda=new Object();
    Mazda.clasificacion="Automóviles de competición de Honda‎";
    Mazda.tamaño="L x A x A: 3894 x 1752 x 1512";
    Mazda.modelo="Mazda e";
    Mazda.color="plomo";
    Mazda.motor="diesel";
    Mazda.propietario="Hamamatsu";
    Mazda.fundador="Sōichirō Honda";

    var Jeep=new Object();
    Jeep.clasificacion="Automóviles de competición de Honda‎";
    Jeep.tamaño="L x A x A: 3894 x 1752 x 1512";
    Jeep.modelo="Jeep e";
    Jeep.color="plomo";
    Jeep.motor="diesel";
    Jeep.propietario="Hamamatsu";
    Jeep.fundador="Sōichirō Honda";

    var Geely=new Object();
    Geely.clasificacion="Automóviles de competición de Honda‎";
    Geely.tamaño="L x A x A: 3894 x 1752 x 1512";
    Geely.modelo="Geely e";
    Geely.color="plomo";
    Geely.motor="diesel";
    Geely.propietario="Hamamatsu";
    Geely.fundador="Sōichirō Honda";
    
    var Fiat=new Object();
    Fiat.clasificacion="Automóviles de competición de Honda‎";
    Fiat.tamaño="L x A x A: 3894 x 1752 x 1512";
    Fiat.modelo="Fiat e";
    Fiat.color="plomo";
    Fiat.motor="diesel";
    Fiat.propietario="Hamamatsu";
    Fiat.fundador="Sōichirō Honda";

   var  Skoda=new Object();
     Skoda.clasificacion="Automóviles de competición de Honda‎";
     Skoda.tamaño="L x A x A: 3894 x 1752 x 1512";
     Skoda.modelo=" Skoda e";
     Skoda.color="plomo";
     Skoda.motor="diesel";
     Skoda.propietario="Hamamatsu";
     Skoda.fundador="Sōichirō Honda";

    var Changan=new Object();
    Changan.clasificacion="Automóviles de competición de Honda‎";
    Changan.tamaño="L x A x A: 3894 x 1752 x 1512";
    Changan.modelo="Changan e";
    Changan.color="plomo";
    Changan.motor="diesel";
    Changan.propietario="Hamamatsu";
    Changan.fundador="Sōichirō Honda";

    
    vehiculos.push(toyota);
    vehiculos.push(Ford);
    vehiculos.push(Honda);
    vehiculos.push(nissan);
    vehiculos.push(Hyundai);
    vehiculos.push(Chevrolet);
    vehiculos.push( Kia);
    vehiculos.push(Mercedes);
    vehiculos.push(BMW);
    vehiculos.push(Renault);
    vehiculos.push(Audi);
    vehiculos.push(Maruti);
    vehiculos.push(Peugeot);
    vehiculos.push(Mazda);
    vehiculos.push(Jeep);
    vehiculos.push( Geely);
    vehiculos.push(Fiat);
    vehiculos.push(Skoda);
    vehiculos.push(Changan);
    
    alert(vehiculos[4].fundador);

}