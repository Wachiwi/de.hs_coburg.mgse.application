package de.hs_coburg.mgse.persistence.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "ModuleSpecification")
@Table(name = "MODULESPECIFICATION")
public class ModuleSpecification {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(nullable = true)
    private List<ModuleDescription> referencedBy = new ArrayList<ModuleDescription>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinColumn(nullable = true)
    private List<Aid> aids = new ArrayList<Aid>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(nullable = true)
    private List<CustomAid> customAids = new ArrayList<CustomAid>();

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(nullable = true)
    private GlossaryEntry details;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(nullable = false)
    private List<ConcreteExamType> concreteExamTypes = new ArrayList<ConcreteExamType>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(nullable = false)
    private List<CourseTypeDeclaration> courseTypes = new ArrayList<CourseTypeDeclaration>();

    @Column(name = "semester", nullable = true)
    private Integer semester;

    @Column(name = "completeName", nullable = true)
    private String completeName;

    //getter and setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<ModuleDescription> getReferencedBy() {
        return referencedBy;
    }

    public void setReferencedBy(List<ModuleDescription> referencedBy) {
        this.referencedBy = referencedBy;
    }

    public List<Aid> getAids() {
        return aids;
    }

    public void setAids(List<Aid> aids) {
        this.aids = aids;
    }

    public List<CustomAid> getCustomAids() {
        return customAids;
    }

    public void setCustomAids(List<CustomAid> customAids) {
        this.customAids = customAids;
    }

    public GlossaryEntry getDetails() {
        return details;
    }

    public void setDetails(GlossaryEntry details) {
        this.details = details;
    }

    public List<ConcreteExamType> getConcreteExamTypes() {
        return concreteExamTypes;
    }

    public void setConcreteExamTypes(List<ConcreteExamType> concreteExamTypes) {
        this.concreteExamTypes = concreteExamTypes;
    }

    public List<CourseTypeDeclaration> getCourseTypes() {
        return courseTypes;
    }

    public void setCourseTypes(List<CourseTypeDeclaration> courseTypes) {
        this.courseTypes = courseTypes;
    }

    public Integer getSemester() {
        return semester;
    }

    public void setSemester(Integer semester) {
        this.semester = semester;
    }

    public String getCompleteName() {
        return completeName;
    }

    public void setCompleteName(String completeName) {
        this.completeName = completeName;
    }
}
