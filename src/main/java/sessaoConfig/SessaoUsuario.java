package sessaoConfig;

import javax.servlet.http.HttpSession;

public class SessaoUsuario {

	private static HttpSession session;
	private static SessaoUsuario instancia;
	
	public static SessaoUsuario Instancia() {
		if(instancia == null) {
			instancia = new SessaoUsuario();
			session.setAttribute("SESSAO_USUARIO", instancia);
		}
		
		return (SessaoUsuario)session.getAttribute("SESSAO_USUARIO");
	}

	/*
	 * Propriedades de Validação!
	 */
	private String Token;
	private String Nome;
	private boolean EhRoot;
	
	public String getToken()
	{
		return this.Token;
	}
	
	public void setToken(String token) {
		this.Token = token;
	}

	public SessaoUsuario getInstancia() {
		return instancia;
	}
	public void setInstancia(SessaoUsuario instancia) {
		SessaoUsuario.instancia = instancia;
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public boolean isEhRoot() {
		return EhRoot;
	}

	public void setEhRoot(boolean ehRoot) {
		EhRoot = ehRoot;
	}
}
