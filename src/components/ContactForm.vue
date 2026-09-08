<script setup>
const whatsappPorCidade = {
  Caratinga: "5533999848276",
  Itaguara: "5537999610922",
  "Abre Campo": "5533999848276"
};

function onSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const nome = String(data.get("nome") || "").trim();
  const cidade = String(data.get("cidade") || "").trim();
  const mensagem = String(data.get("mensagem") || "").trim();
  const numero = whatsappPorCidade[cidade] || whatsappPorCidade.Caratinga;

  let texto = "Olá, gostaria de agendar uma consulta";
  if (cidade === "Itaguara") texto += " em Itaguara com o Doutor Virlenio";
  else if (cidade === "Abre Campo") texto += " em Abre Campo";
  texto += `. Meu nome é ${nome}.`;

  if (mensagem) texto += ` ${mensagem}`;

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <form class="form panel" @submit="onSubmit">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" required />

    <label for="cidade">Cidade onde deseja atendimento</label>
    <select id="cidade" name="cidade" required>
      <option value="">Selecione</option>
      <option value="Caratinga">Caratinga</option>
      <option value="Itaguara">Itaguara</option>
      <option value="Abre Campo">Abre Campo</option>
    </select>

    <label for="mensagem">Mensagem opcional</label>
    <textarea id="mensagem" name="mensagem" placeholder="Informações que possam ajudar no agendamento" />

    <button class="btn btn-primary" type="submit">Solicitar agendamento</button>
  </form>
</template>
