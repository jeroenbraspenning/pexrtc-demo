
let options = {
    proxy: 'staging.service.vc',
    alias:'vc2_eoIT8U3cDRw',
    bandwith: 1024,
    pin: false
};

// Video Element
let videoEl = document.querySelector("#webrtc-element");

// RTC Instance
let pex = new PexRTC();

// De stappen zijn genummerd.


// #2: onSetup wordt aangeropen door "pex"
pex.onSetup = () => {

    // #3 roep pex.connect aan om de verbinding op te starten.

    // optioneel kan hier een "pin" meegeven worden 
    pex.connect(options.pin)
}

// #4: als het connecten succesvol is ontvangen we de videoUrl / stream
pex.onConnect= (videoUrl) => {

    // #5: op oude versies van chrome kon je direct de videoUrl koppelen.
    // self.videoElement.src = videoUrl

    // #6: koppel de stream, indien de browser dit niet ondersteund pakken we de iets oudere "createObjectURL" methode.
    try {
        videoEl.srcObject = videoUrl;
    } catch (error) {
        videoEl.src = URL.createObjectURL(videoUrl);
    }
}


// #1: start het proces door een makeCall te geven
pex.makeCall(options.proxy,options.alias,'tester');
