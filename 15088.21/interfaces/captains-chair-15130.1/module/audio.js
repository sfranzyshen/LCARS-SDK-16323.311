//General Beep
$(document).on('tap', '.ado_btnPress', audioButtonPress);

function audioButtonPress() {
    return runAudio('module/audio/buttonPress.ogg');
};

//View Switch
$(document).on('tap', '.ado_viewSwitch', audioViewSwitch);

function audioViewSwitch() {   
    return runAudio('module/audio/viewSwitch.ogg');
};

//Enable Service
function audioEnableService() {
    return runAudio('module/audio/serviceEnable.ogg');
};

//Disable Service
function audioDisableService() {
    return runAudio('module/audio/serviceDisable.ogg');
};

//Wobble Sound
function audioWobble() {
    return runAudio('module/audio/wobbleMove.ogg');
};

//Start Up
function audioStartup() {
    return runAudio('module/audio/startup.ogg');
};

//Lock Terminal
function audioLockTerminal() {
    return runAudio('module/audio/lock.ogg');
};

//Enable-Disable Command Mode
function audioCommandToggle() {
    return runAudio('module/audio/commandToggle.ogg');
};

//Launch Application or Setting
function audioLaunchApp() {
    return runAudio('module/audio/launchApp.ogg');   
};

//Deny Sound
function audioDeny() {
    return runAudio('module/audio/deny.ogg');   
};

//Access Data Object Event
$(document).on('tap', '.ado_accessData', audioAccessData);

//Accessing Data
function audioAccessData() {
    return runAudio('module/audio/accessingdata.ogg');
};

//View Switch
$(document).on('longTap', '.ado_accessDataSuccess', audioAccessDataSuccess);

//Accessing Data Success
function audioAccessDataSuccess() {
    return runAudio('module/audio/accessdatasuccess.ogg'); 
};


function runAudio(endPath){
    if(domlCalls.settings.values.soundEffects !== false){
        var path = window.location.pathname;
        path = path.substr( path, path.length - 10 );
        var starPath = 'file://' + path;
        var audio_buttonPress = new Audio(starPath + endPath);
        audio_buttonPress.play();
        audio_buttonPress = null;
    }
    return true;
}
