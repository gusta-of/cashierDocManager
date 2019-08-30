package modelo;

import java.util.Objects;

public class Pessoa {

    public Pessoa() {
    }

    private Long ID;
    private String Nome;
    private String CPF;
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
