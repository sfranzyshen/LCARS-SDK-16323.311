LCARS.settings.adoBtnPress = function(args){
    if(args.set === true){
        if(args.args.adoBtnPress === false){     
            $(args.element).removeClass('ado_btnPress');
            allObjects[args.elemID].adoBtnPress = args.args.adoBtnPress;
        }else if(args.args.adoBtnPress === true){
            $(args.element).addClass('ado_btnPress');
            allObjects[args.elemID].adoBtnPress = args.args.adoBtnPress;
        }
        return args.element;
    }else{
        if(!allObjects[args.elemID].adoBtnPress){return null;}else{return allObjects[args.elemID].adoBtnPress;}
    }  
}

LCARS.settings.adoViewSwitch = function(args){
    if(args.set === true){
        if(args.args.adoViewSwitch === false){     
            $(args.element).removeClass('ado_viewSwitch');
            allObjects[args.elemID].adoViewSwitch = args.args.adoViewSwitch;
        }else if(args.args.adoViewSwitch === true){
            $(args.element).addClass('ado_viewSwitch');
            allObjects[args.elemID].adoViewSwitch = args.args.adoViewSwitch;
        }
        return args.element;
    }else{
        if(!allObjects[args.elemID].adoViewSwitch){return null;}else{return allObjects[args.elemID].adoViewSwitch;}
    }  
}

LCARS.settings.adoAccessData = function(args){
    if(args.set === true){
        if(args.args.adoAccessData === false){     
            $(args.element).removeClass('ado_accessData');
            allObjects[args.elemID].adoAccessData = args.args.adoAccessData;
        }else if(args.args.adoAccessData === true){
            $(args.element).addClass('ado_accessData');
            allObjects[args.elemID].adoAccessData = args.args.adoAccessData;
        }
        return args.element;
    }else{
        if(!allObjects[args.elemID].adoAccessData){return null;}else{return allObjects[args.elemID].adoAccessData;}
    }  
}

LCARS.settings.adoAccessDataSuccess = function(args){
    if(args.set === true){
        if(args.args.adoAccessDataSuccess === false){     
            $(args.element).removeClass('ado_accessDataSuccess');
            allObjects[args.elemID].adoAccessDataSuccess = args.args.adoAccessDataSuccess;
        }else if(args.args.adoAccessDataSuccess === true){
            $(args.element).addClass('ado_accessDataSuccess');
            allObjects[args.elemID].adoAccessDataSuccess = args.args.adoAccessDataSuccess;
        }
        return args.element;
    }else{
        if(!allObjects[args.elemID].adoAccessDataSuccess){return null;}else{return allObjects[args.elemID].adoAccessDataSuccess;}
    }  
}


