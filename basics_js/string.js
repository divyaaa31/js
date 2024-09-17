const name  = "ram"
const repoCount = 50

// string concate

    console.log(`Hello my name is ${name} and my repo 
    count is ${repoCount}  `);

    const gameName = new String('RAINBOW')
    console.log(gameName[0]);
    console.log(gameName.__proto__.__proto__);
    console.log(gameName.length);
    console.log(gameName.toLowerCase());
    console.log(gameName.charAt(2));
    console.log(gameName.indexOf('M'));
    
    const newString = gameName.substring(0, 4)
    console.log(newString);

    const anotherString = gameName.slice(-8, 4)
    console.log(anotherString);

    const newStringOne = " hitesh "
    console.log(newStringOne);
    console.log(newStringOne.trim());

    const url = "https://hitesh.com/hitesh%20choudhary"
    console.log(url.replace('%20', '-'));
    
    console.log(url.includes('ram'));
    console.log(gameName.split());
    
      
    
    
    
    
