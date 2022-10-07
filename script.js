var obj = {
    name : "Javid",
    age: 22,
    course: [],
    buyCourse : function(typesOfCourses){
        this.course.push(typesOfCourses)
    },
    courseCount: function(){
        return `Total Course List is : ${this.course.length}`;
    }




}
var course = true

obj.buyCourse("js")
obj.buyCourse("js")
obj.buyCourse("js")
obj.buyCourse("js")
console.log(obj.courseCount())