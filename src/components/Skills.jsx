



export default function Skills() {
    
    const skills = [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Advanced' },
         { name: 'Git', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'UI/UX Design', level: 'Intermediate' },
    ]


return (
    <section id="skills" className="skills">
        <div className="container">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skills.map(skill => (
                    <div key={skill.name} className="skill-item">
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
}