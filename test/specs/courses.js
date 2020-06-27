// const {expect} = require('chai');
// const login = require("../login");
// describe('COURSES', function () {
//     before(() => {
//         login();
//     })
//     it('should navigate to Courses page', function () {
//         const coursesLink =  $('[qa="courses-link"]');
//         coursesLink.click();
//         const header = $('h1');
//         expect(header.getText()).eq('Courses');
//     });
//     it('should create new course', function () {
//         const createNewCourse = $('[class="btn btn-primary"]');
//         createNewCourse.click();
//         const header = $('.h1');
//         expect(header.getText()).eq("Create Course");
//     });
//     it('should add Course name', function () {
//         const courseName = $('input[name="name"]');
//         courseName.setValue("Test course");
//         expect(courseName.getValue()).eq("Test course");
//     });
//     it('should add Course description', function () {
//         const courseDescription = $('[name="description"]');
//         courseDescription.setValue("New test");
//         expect(courseDescription.getValue()).eq("New test");
//     });
//     it('should change access type', function () {
//         const access = $('[name="accessType"]');
//         access.click();
//         browser.keys("ArrowDown");
//         browser.keys('Enter');
//         browser.keys('Tab');
//         browser.pause(3000);
//         const accessType = $('[value="all"]');
//         // expect(access.getText()).eq("All");
//         expect(access.getValue()).eq('all');
//         // expect(accessType.isSelected()).eq(true);
//     });
//     it('should click Create button', function () {
//         const createBtn = $('[type="submit"]');
//         createBtn.click();
//     });
//});
