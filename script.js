//Practice 1
let shoppingList  = ["clothes","food","electronics","pets","beverages"]
console.log(shoppingList)
shoppingList.push("snacks")
console.log(shoppingList)
shoppingList.shift()
console.log(shoppingList)
console.log(shoppingList.length)
for(items of shoppingList){
    console.log(`item:  ${items}`)
}

function formatList(items){
for (let i= 0; i < items.length; i++){
    console.log(`item ${i+1}: ${items[i]}`)
}
}

formatList(["clothes","food","electronics","pets","beverages"])



//Practice 2

function getAverages(grades){
    let total = 0;
for(let grade = 0; grade< grades.length;grade++){
    total += grades[grade]
}
 let avg = total/grades.length
console.log(avg.toFixed(2))
}
getAverages([56,48,97,54,76,89,67,90,88,87,65,78])

let grades = [56,48,97,54,76,89,67,90,88,87,65,78]
function getHighest(grades){
    let grd = grades.reduce((previous,next)=>previous>=next?previous:next)
    console.log(grd)

}
getHighest(grades)

function getLowest(grades){
    let grd = grades.reduce((previous,next)=>previous<=next?previous:next)
    console.log(grd)

}
getLowest(grades)


function getPassRate(grades){
    let grd = grades.filter((grade)=>grade>=50)
    let passRate = (grd.length/grades.length)*100
    console.log(passRate.toFixed(2))

}
getPassRate(grades)




//Practice 3
let movies = []
let ratings = []

function addMovie(movie, rating){
movies.push(movie);
ratings.push(rating);
}
addMovie("Lord of the rings", 5.8)
addMovie("The two of us", 6.4)
addMovie("Publica AI", 9.9)
console.log(movies)
console.log(ratings)

function getAverageRating(rates){
    let total = 0;
for(let rate = 0; rate< rates.length;rate++){
    total += rates[rate]
}
 let avg = total/rates.length
console.log(avg.toFixed(2))
}
getAverageRating(ratings)


function getTopMovie(rates){
    let rate = rates.reduce((previous,next)=>previous>=next?previous:next)
    console.log(rate)

}
getTopMovie(ratings)

function movieRatingSorted(movies, rates){
    let movie = movies.map((name, index)=>({name,rating: rates[index]}))
    movie.sort((a,b) =>b.rating-a.rating)
    console.log(movie)
}
movieRatingSorted(movies,ratings)


//Practice 4
let name = []
let grade = []
    function addStudent(names,grades){
name.push(names)
grade.push(grades)
}
addStudent("Bolu", 67)
addStudent("Toyin", 76)
addStudent("Yinka", 65)
addStudent("Victoria", 87)
addStudent("David", 69)
console.log(name)
console.log(grades)


function calculateAverage(grades){
    let total = 0;
    for(let grade of grades){
        total += grade

    }
    console.log((total/grades.length).toFixed(2))
}
calculateAverage(grade)

function topAndButtom(students, grades){
     let student = students.map((name, index)=>({name,grade: grades[index]}))
    student.sort((a,b) =>b.grade-a.grade)
    console.log(student)
}
topAndButtom(name,grade)
    if(grade >=80){
        console.log()
    }

function reportGenerator(){
    function addStudent(names, grades){
        if (typeof names !== 'string' || names.trim() === '') {
            console.log("Student name must be a valid string");
            return false;
        }
        
        if (typeof grades !== 'number' || grades < 0 || grades > 100) {
            console.log(" Grade must be between 0 and 100");
            return false;
        }
        
        name.push(names)
        grade.push(grades)
        console.log(`${names} with grade ${grades}`)
        return true;
    }

    addStudent("Bolu", 67)
    addStudent("Toyin", 76)
    addStudent("Yinka", 65)
    addStudent("Victoria", 87)
    addStudent("David", 69)
    addStudent("Sarah", 92)
    addStudent("Mike", 45)

    function calculateAverage(grades){
        if (grades.length === 0) return 0;
        let total = 0;
        for(let gradeItem of grades){
            total += gradeItem
        }
        const avg = (total/grades.length).toFixed(2)
        console.log(`Class Average: ${avg}%`)
        return avg;
    }
    calculateAverage(grade)
    function topAndBottom(students, grades){
        if (grades.length === 0) return null;
        
        const maxGrade = Math.max(...grades)
        const minGrade = Math.min(...grades)
        const topIndex = grades.indexOf(maxGrade)
        const bottomIndex = grades.indexOf(minGrade)
        
        console.log(`Top Student: ${students[topIndex]} - ${maxGrade}%`)
        console.log(`Bottom Student: ${students[bottomIndex]} - ${minGrade}%`)
        
        let student = students.map((name, index)=>({name, grade: grades[index]}))
        student.sort((a,b) =>b.grade-a.grade)
        console.log(student)
        
        return { top: {name: students[topIndex], grade: maxGrade}, 
                bottom: {name: students[bottomIndex], grade: minGrade} }
    }
    topAndBottom(name, grade)

    function getLetterGrade(numericGrade){
        if (numericGrade >= 90) return 'A';
        if (numericGrade >= 80) return 'B';
        if (numericGrade >= 70) return 'C';
        if (numericGrade >= 60) return 'D';
        return 'F';
    }
    function categorizeGrades(students, grades){
        console.log("\nGrade Categories:")
        for(let i = 0; i < students.length; i++){
            const letterGrade = getLetterGrade(grades[i])
            const status = grades[i] >= 60 ? "PASS" : "FAIL"
            console.log(`${students[i]}: ${grades[i]}% - ${letterGrade} (${status})`)
        }
    }
    categorizeGrades(name, grade)
    function generateFormattedReport(){
       
       
        
        
        let studentData = name.map((studentName, index)=>({
            name: studentName,
            grade: grade[index],
            letterGrade: getLetterGrade(grade[index]),
            status: grade[index] >= 60 ? "PASS" : "FAIL"
        }))
        studentData.sort((a,b) => b.grade - a.grade)
        
        console.log("\nRank | Name      | Grade | Letter | Status")
     
        
        for(let i = 0; i < studentData.length; i++){
            const student = studentData[i]
            const rank = (i + 1).toString().padStart(2, ' ')
            const studentName = student.name.padEnd(9, ' ')
            const gradeStr = student.grade.toString().padStart(5, ' ')
            const letter = student.letterGrade.padStart(6, ' ')
            
            console.log(`${rank}   | ${studentName} | ${gradeStr} | ${letter} | ${student.status}`)
        }
        
        const average = calculateAverage(grade)
        const passCount = grade.filter(g => g >= 60).length
        const passRate = ((passCount / grade.length) * 100).toFixed(1)
        console.log(`Total Students: ${name.length}`)
        console.log(`Pass Rate: ${passRate}% (${passCount}/${grade.length})`)
    
        const gradeCounts = {A: 0, B: 0, C: 0, D: 0, F: 0}
        for(let gradeItem of grade){
            gradeCounts[getLetterGrade(gradeItem)]++
        }
        for(let letter in gradeCounts){
            console.log(`${letter}: ${gradeCounts[letter]} students`)
        }
    }
    
    generateFormattedReport()
}

reportGenerator()