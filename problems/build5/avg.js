const student_marks=[
    {
        name:"AAA",
        unit:30,
        final:35
    },
    {
        name:"BBB",
        unit:34,
        final:32
    },
    {
        name:"CCC",
        unit:40,
        final:35
    },
    {
        name:"DDD",
        unit:28,
        final:41
    },
    {
        name:"EEE",
        unit:17,
        final:22
    }
]


function getHighest(student_marks)
{
    let highest={name:"",marks:0}
    for(let st of student_marks)
    {
        if(st.final>highest.marks)
        {
            highest.marks=st.final
            highest.name=st.name
        }
    }
    return highest
}


function getAvg(student_marks)
{
    let avg=0;

    for(let std of student_marks)
    {
        avg=avg+std.final
    }
    avg=avg/student_marks.length
    return avg
}

let result=getHighest(student_marks)
console.log(result)

let average=getAvg(student_marks)
console.log("avg : "+average)