function lottery(str){
    let seq = [];

    str.split('').filter(c =>{
        if(!isNaN(c) && !seq.includes(c)) seq.push(c);
    });

    return seq.length > 0 ? seq.join('') : 'One more run!'
}