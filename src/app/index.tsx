import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Registro = {
  numero: number;
};

const Inicio = () => {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const incrementarContador = () => {
    const nuevoNumero = contador + 1;
    setContador(nuevoNumero);
    setRegistros((registrosActuales) => [
      ...registrosActuales,
      { numero: nuevoNumero },
    ]);
  };

  const restarContador = () => {
    if (contador === 0) return;

    const nuevoNumero = contador - 1;
    setContador(nuevoNumero);
    setRegistros((registrosActuales) => [
      ...registrosActuales,
      { numero: nuevoNumero },
    ]);
  };

  return (
    <View style={estilos.body}>
      <Text style={estilos.titulo}>Pedidos SENA</Text>

      <View style={estilos.card}>
        <Text style={estilos.producto}>Hamburguesa</Text>
        <Text style={estilos.precio}>$15.000</Text>

     
        <View style={estilos.contenedorContador}>
          <TouchableOpacity
            style={estilos.btnRestar}
            onPress={restarContador}
          >
            <Text style={estilos.btnText}>-</Text>
          </TouchableOpacity>

          <Text style={estilos.numeroContador}>{contador}</Text>

          <TouchableOpacity
            style={estilos.btnAumentar}
            onPress={incrementarContador}
          >
            <Text style={estilos.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Inicio;

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "rgb(223, 223, 223)",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  titulo: {
    color: "#1a5204",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#22940b",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    flexDirection: "column",
    gap: 12,
  },
  producto: {
    color: "#000000",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
  precio: {
    color: "#fdfffd",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  // Nuevos estilos para alinear [-  0  +]
  contenedorContador: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 10,
  },
  numeroContador: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    minWidth: 35,
    textAlign: "center",
  },
  btnAumentar: {
    backgroundColor: "#2ecc71",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: "center",
  },
  btnRestar: {
    backgroundColor: "#ff0000",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
