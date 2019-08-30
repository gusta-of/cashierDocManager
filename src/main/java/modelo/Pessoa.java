package modelo;

import javax.naming.Name;
import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "tb_pessoa")
public class Pessoa {

    public Pessoa() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;

    @Column(name="nome", nullable = false)
    private String Nome;

    @Temporal(TemporalType.DATE)
    @Column(name="dataNascimento", nullable = false)
    private Date DataNascimento;

    @Column(name="cpf", nullable = false)
    private String CPF;

    @Column(name="email", nullable = false)
    private String Email;

    public Long getID() {
        return ID;
    }

    public String getNome() {
        return Nome;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getCPF() {
        return CPF;
    }

    public String getEmail() {
        return Email;
    }

    public Date getDataNascimento() {
        return DataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        DataNascimento = dataNascimento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pessoa pessoa = (Pessoa) o;
        return ID.equals(pessoa.ID) &&
                Nome.equals(pessoa.Nome) &&
                CPF.equals(pessoa.CPF) &&
                Email.equals(pessoa.Email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ID, Nome, CPF, Email);
    }
}
