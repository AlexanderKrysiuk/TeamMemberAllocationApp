import TeamMemberCard from "./TeamMemberCard"
const TeamMembers = ({employees, handlingEmployeeCardClick, selectedTeam}) => {
    return(
        employees.map((employee) => (
            <TeamMemberCard employee={employee} handlingEmployeeCardClick={handlingEmployeeCardClick} selectedTeam={selectedTeam}/>
        ))
    )
}
export default TeamMembers