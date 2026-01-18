export const getData = (object,index,defaultdata,noempty=false)=>{
    let data = undefined
    if(object instanceof Array){
        data = object.at(index)
    }else if(object instanceof Map){
        data = object.get(index)
    }else{
        data = object[index]
    }
    if(noempty){
        if(data instanceof Array && data.length === 0){
            data = undefined
        }else if(data instanceof Map && data.size === 0){
            data = undefined
        }else if(typeof data === "string" && data.length === 0){
            data = undefined
        }
    }
    return data !== undefined ? data : defaultdata
}

export const defaultMenuData = {
    mon:[],
    tue:[],
    wed:[],
    thu:[],
    fri:[]
}