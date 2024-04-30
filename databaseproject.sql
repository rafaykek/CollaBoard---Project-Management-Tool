drop database if exists PROJECT_FINAL_;
CREATE DATABASE PROJECT_FINAL_;
USE  PROJECT_FINAL_;


DROP TABLE  IF EXISTS User;
DROP TABLE IF EXISTS Project; 
DROP TABLE IF EXISTS Workflow;
DROP TABLE IF EXISTS Sprint;
DROP TABLE IF EXISTS Issue;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS sprint;
drop table if exists team;
drop table if exists team_members;
drop table if exists PhoneNumber_user;
drop table if exists programmingLanguages;

CREATE TABLE User 
(
  UserID INT AUTO_INCREMENT PRIMARY KEY,
  role varchar(100) not null,
  Name VARCHAR(50),
  Email VARCHAR(100),
  Password VARCHAR(50),
  Gender VARCHAR(10),
  DateOfBirth  VARCHAR(50),
  Salary DECIMAL(10,2),
  JoiningDate  VARCHAR(50),
  address varchar(20),
  City VARCHAR(50),
  Phone varchar(20),
  Country VARCHAR(50),
  ZipCode VARCHAR(10),
  EmployeeDegree varchar(100)
);



#for multivalue of user and phone 
CREATE TABLE PhoneNumber_user
(
  UserID INT,
  Phone VARCHAR(20),
  FOREIGN KEY (UserID) REFERENCES User(UserID)
);

CREATE TABLE Project (
    ProjectID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectName VARCHAR(100),
    PMID INT,
    Description TEXT,
    StartDate  VARCHAR(50),
    EndDate VARCHAR(50),
    FOREIGN KEY (PMID) REFERENCES User(UserID)
);

CREATE TABLE Sprint (
    SprintID INT AUTO_INCREMENT PRIMARY KEY ,
    SprintName VARCHAR(50),
    sprintNum int,
    Description VARCHAR(100),
    StartDate  VARCHAR(50),
    EndDate  VARCHAR(50),
    ProjectID INT,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);


CREATE TABLE Issue (
    IssueID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255),
    Description TEXT,
    Type VARCHAR(50),
    Priority VARCHAR(50),
    Status VARCHAR(50),
    ReportedBy INT,
    SprintID INT,
    ProjectID INT,
    DueDate  VARCHAR(50),
    FOREIGN KEY (ReportedBy) REFERENCES User(UserID),
    FOREIGN KEY (SprintID) REFERENCES Sprint(SprintID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);


    
CREATE TABLE Workflow
 (
    WorkflowID int AUTO_INCREMENT,
    IssueID int,
    description varchar(30),
    foreign key (IssueID) references issue (issueid),
    primary key(WorkflowID,IssueID));
    
#M TO M realtionship


CREATE TABLE team
(
teamid int AUTO_INCREMENT primary key,
ProjectID int,
teamname varchar(100),
FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)

);


CREATE TABLE team_members (
  teamid INT,
  employeeid INT,
  PRIMARY KEY (teamid, employeeid),
  FOREIGN KEY (teamid) REFERENCES team (teamid),
  FOREIGN KEY (employeeid) REFERENCES User (UserID)
);


create table programmingLanguages(
Programming_Language varchar(100),
EmployeeID int,
foreign key (EmployeeID) references User(userid));



INSERT INTO User (UserID, role, Name, Email, Password, Gender, DateOfBirth, Salary, JoiningDate, address, City, Phone, Country, ZipCode, EmployeeDegree)
VALUES
(1, 'Manager', 'John Smith', 'jsmith@example.com', 'password1', 'Male', '1980-01-01', 100000.00, '2020-01-01', '123 Main St', 'New York', '123-456-7890', 'USA', '12345', 'MBA'),
(2, 'Developer', 'Jane Doe', 'jdoe@example.com', 'password2', 'Female', '1985-02-15', 75000.00, '2020-02-01', '456 Second Ave', 'San Francisco', '234-567-8901', 'USA', '67890', 'BS in Computer Science'),
(3, 'Developer', 'Bob Johnson', 'bjohnson@example.com', 'password3', 'Male', '1990-03-31', 60000.00, '2020-03-01', '789 Third St', 'Seattle', '345-678-9012', 'USA', '23456', 'BS in Electrical Engineering'),
(4, 'Designer', 'Samantha Lee', 'slee@example.com', 'password4', 'Female', '1988-06-08', 80000.00, '2020-04-01', '101 Fourth Ave', 'Los Angeles', '456-789-0123', 'USA', '34567', 'BFA in Graphic Design'),
(5, 'Developer', 'Tom Chen', 'tchen@example.com', 'password5', 'Male', '1995-08-22', 50000.00, '2020-05-01', '456 Fifth St', 'Chicago', '567-890-1234', 'USA', '45678', 'BS in Computer Science');


INSERT INTO PhoneNumber_user (UserID, Phone)
VALUES
(1, '123-456-7890'),
(2, '234-567-8901'),
(3, '345-678-9012'),
(4, '456-789-0123'),
(5, '567-890-1234');



INSERT INTO Project (ProjectID, ProjectName, PMID, Description, StartDate, EndDate)
VALUES
(1, 'Website Redesign', 1, 'Redesign company website to improve user experience', '2021-01-01', '2021-12-31'),
(2, 'Mobile App Development', 2, 'Develop a mobile app for iOS and Android', '2021-02-01', '2022-02-28'),
(3, 'Database Optimization', 1, 'Optimize database performance for faster queries', '2021-03-01', '2021-06-30'),
(4, 'E-commerce Platform', 2, 'Develop an e-commerce platform for online sales', '2021-04-01', '2021-11-30'),
(5, 'Marketing Campaign', 3, 'Plan and execute a marketing campaign for new product launch', '2021-05-01', '2021-07-31');



INSERT INTO Sprint (SprintID, SprintName, sprintNum, Description, StartDate, EndDate, ProjectID)
VALUES
(1, 'Sprint 1', 1, 'This is the first sprint', '2023-05-01', '2023-05-14', 1),
(2, 'Sprint 2', 2, 'This is the second sprint', '2023-05-15', '2023-05-28', 1),
(3, 'Sprint 3', 3, 'This is the third sprint', '2023-05-29', '2023-06-11', 1),
(4, 'Sprint 4', 4, 'This is the fourth sprint', '2023-06-12', '2023-06-25', 1),
(5, 'Sprint 5', 5, 'This is the fifth sprint', '2023-06-26', '2023-07-09', 1);


INSERT INTO Issue (IssueID, Title, Description, Type, Priority, Status, ReportedBy, SprintID, ProjectID, DueDate)
VALUES
(1, 'Issue 1', 'This is the first issue', 'Bug', 'High', 'Open', 1, 1, 1, '2023-05-10'),
(2, 'Issue 2', 'This is the second issue', 'Feature', 'Low', 'In Progress', 2, 1, 1, '2023-05-25'),
(3, 'Issue 3', 'This is the third issue', 'Bug', 'Medium', 'Open', 3, 2, 1, '2023-06-02'),
(4, 'Issue 4', 'This is the fourth issue', 'Feature', 'High', 'Closed', 4, 2, 1, '2023-06-20'),
(5, 'Issue 5', 'This is the fifth issue', 'Bug', 'Low', 'In Progress', 5, 3, 1, '2023-06-29');


INSERT INTO Workflow (WorkflowID, IssueID, description)
VALUES
(1, 1, "step no 1 "),
(2, 1, "step no 2 "),
(1, 2, "step no 1 "),
(2, 2, "step no 2 "),
(3, 2, "step no 3 ");


INSERT INTO team (teamid, projectid, teamname)
VALUES
(1, 1, 'Team 1'),
(2, 1, 'Team 2'),
(3, 1, 'Team 3'),
(4, 2, 'Team 4'),
(5, 2, 'Team 5');

INSERT INTO team_members (teamid, employeeid)
VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(3, 5);

INSERT INTO programmingLanguages (Programming_Language, EmployeeID)
VALUES
('Java', 1),
('Python', 2),
('C++', 3),
('JavaScript', 4),
('Ruby', 5);




-- Triggers for Bonus Makrs


DELIMITER //

CREATE TRIGGER prevent_overlapping_project_dates
BEFORE INSERT ON Project
FOR EACH ROW
BEGIN
  DECLARE overlapping INT;

  SELECT COUNT(*) INTO overlapping
  FROM Project
  WHERE PMID = NEW.PMID
    AND NEW.StartDate <= EndDate
    AND NEW.EndDate >= StartDate;

  IF overlapping > 0 THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Overlapping project dates are not allowed for the same project manager.';
  END IF;
END//

DELIMITER ;


-- Trigger # 02

DELIMITER //

CREATE TRIGGER update_project_count
AFTER INSERT ON Project
FOR EACH ROW
BEGIN
  DECLARE project_count INT;

  SELECT COUNT(*) INTO project_count
  FROM Project
  WHERE PMID = NEW.PMID;

  UPDATE User
  SET project_count = project_count
  WHERE UserID = NEW.PMID;
END//

DELIMITER ;

-- QUERY OPTIMIZATION 
-- It applies transformations, such as eliminating unnecessary joins or subqueries, to simplify the query and improve its efficiency.

-- We have use the technique of Query Rewriting FOR Query Optimization. While inserting from the forms we are not inserting everyting instead we have kept some auto_increment.



