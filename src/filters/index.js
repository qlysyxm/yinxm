class Tools {
    // Answer.js    
    static commontArr(data) {
        const arr = [];
        if(data.count < 1){
            return arr;
        }else{
            if(data.count > 10){
                data.count = 10;
            }
            for(let i=0;i<data.count;++i){
                const comments = this.getcommonts(data.data[i].comments);
                arr[i] = {
                    text:data.data[i].text,
                    clientName:data.data[i].clientName,
                    clientId:data.data[i].clientId,
                    clientImage:data.data[i].clientImage,
                    createTime:data.data[i].createTime,
                    comments
                }
            }
        }
        return arr;
    }
    static getcommonts(comments){
        const arrlist = [];
        if(comments.count < 0){
            return [];
        }
        for(let i=0;i<comments.count;++i){
            arrlist.push({
                text:comments.data[i].text,
                clientName:comments.data[i].clientName,
                clientId:comments.data[i].clientId,
            });            
            if(comments.data[i].comments.count > 0){
                const data = this.getcommonts(comments.data[i].comments);
              
                for(let j=0;j<data.length;++j){
                    arrlist.push(data[j]);
                }
            }
        }
        return arrlist;
    }
    // Question.js
    static commontArr1(data) {
        const arr = [];
        if(data.count < 1){
            return arr;
        }else{
            if(data.count > 10){
                data.count = 10;
            }
            for(let i=0;i<data.count;++i){
                // const comment = this.getcommonts1(data.data[i].comment);
                arr[i] = {
                    description:data.data[i].description,
                    clientName:data.data[i].clientName,
                    clientId:data.data[i].clientId,
                    clientImage:data.data[i].clientImage,
                    modifyTime:data.data[i].modifyTime,
                    commentNum:data.data[i].commentNum,
                    likeNum:data.data[i].likeNum,
                    // comment
                }
            }
        }
        return arr;
    }
    static getcommonts1(comment){
        const arrlist = [];
        if(comment.count < 0){
            return [];
        }
        for(let i=0;i<comment.count;++i){
            arrlist.push({
                description:comment.data[i].description,
                clientName:comment.data[i].clientName,
                clientId:comment.data[i].clientId,
            });            
            if(comment.data[i].comment.count > 0){
                const data = this.getcommonts(comment.data[i].comment);
                for(let j=0;j<data.length;++j){
                    arrlist.push(data[j]);
                }
            }
        }
        return arrlist;
    }
}

export default Tools;