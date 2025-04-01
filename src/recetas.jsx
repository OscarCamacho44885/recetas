import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos Bootstrap
import "./style.css"; // Importamos estilos personalizados
import sopa from '../src/image/sopa1.jpg';


const Recetas = () => {
  return (
    

    <div className="app-container">
      <div className="banner">
        <div className="logo" />
      </div>
    
      <header>
      <div className="header-content">
      <h1 className="logo-1">Delirecetas</h1>
        <nav>
          <a href="#sopas">Sopas</a>
          <a href="#desayunos">Desayunos</a>
          <a href="#pastas">Pastas</a>
          <a href="#comidas">Comidas</a>
          <a href="#cenas">Cenas</a>
          <a href="#snacks">Snaks</a>
        </nav>
        </div>
      </header>

      {/* APARTADO DE SOPAS ----------------------------------------------------------------------------------------------------*/}
    <div className="categoria-1" id="sopas">
    </div>
  <main className="container mt-5 pt-5">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100 card-hover">
        <img src={sopa} className="card-img-top" alt="Sopa de Champiñones" />
        <div className="card-body">
          <h5 className="card-title">Sopa de Champiñones</h5>
          <hr />
          <p className="card-text">
            Una deliciosa y cremosa sopa elaborada con champiñones frescos, cebolla y ajo.
            Suave y reconfortante perfecta para disfrutar en cualquier época del año.
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
            ° Tomates asados y sin semilla. <br />
            ° Cucharas de aceite. <br />
            ° Cebolla. <br />
            ° Diente de ajo. <br />
            ° Chiles serranos (opcional).<br />
            ° Rama de epazote.<br />
            ° Champiñones cortados en rebanadas finas.<br />
            ° Caldo de pollo.<br />
            ° Sal y pimienta.
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --  
              </small>  
              <button 
                onClick={() => window.open("https://youtu.be/MAhuFwIAQu0?si=i7kPXEYseaOAIX-u", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/sopa2.png" className="card-img-top" alt="Sopa de Tomate" />
        <div className="card-body">
          <h5 className="card-title">Sopa de Tomate</h5>
          <hr />
          <p className="card-text">
          Una sopa de tomate casera, cremosa y reconfortante, elaborada con tomates 
          frescos, verduras sofritas, especias y un toque final de albahaca, 
          ideal para disfrutar como entrante o plato principal en días fríos.
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Tomates.<br />
          ° Aceite de oliva.<br />
          ° Ajos.<br />
          ° Cebolla.<br />
          ° Zanahoria.<br />
          ° Sal (al gusto).<br />
          ° Pimienta negra recién molida.<br />
          ° Tomillo.<br />
          ° Romero.<br />
          ° Pimentón dulce.<br />
          ° Agua.<br />
          ° Albahaca fresca.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/BQn06MxDXbU?si=_ghvERg55zGKwn3o", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/sopa3.png" className="card-img-top" alt="Sopa de Lentejas" />
        <div className="card-body">
          <h5 className="card-title">Sopa de Lentejas</h5>
          <hr />
          <p className="card-text">
          Unas lentejas cocidas tradicionales mexicanas, caldosas, preparadas 
          con cebolla, ajo, tomate fresco, cilantro y sazonadas con consomé 
          de pollo, ideales para servir solas o acompañadas de queso rallado o huevo cocido, 
          perfectas para épocas de vigilia o como platillo reconfortante en cualquier momento del año.
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Lentejas.<br />
          ° Manojo de cilantro fresco.<br />
          ° Tomates/jitomates.<br />
          ° Cebolla.<br />
          ° Dientes de ajo.<br />
          ° Sal.<br />
          ° Consomé de pollo en polvo.<br />
          ° Aceite.<br />
          ° Agua.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/MAhuFwIAQu0?si=i7kPXEYseaOAIX-u", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/sopa4.jpg" className="card-img-top" alt="Sopa de Crema de Espinacas" />
        <div className="card-body">
          <h5 className="card-title">Sopa de Crema de Espinacas</h5>
          <hr />
          <p className="card-text">
          Una crema de espinacas suave y cremosa, elaborada con espinacas frescas, 
          leche evaporada y un toque de nuez moscada, cocinada en una base de mantequilla 
          y harina para lograr una textura sedosa. Ideal como entrada o acompañamiento, 
          se sirve caliente con cubitos de queso derretidos y decorada con hojas verdes, 
          perfecta para disfrutar en porciones individuales o familiares.
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Espinacas.<br />
          ° Cebolla.<br />
          ° Leche evaporada.<br />
          ° 2 tazas de agua o caldo de pollo.<br />
          ° Harina de trigo.<br />
          ° Cucharadas de mantequilla o margarina sin sal.<br />
          ° Cucharada de caldo de pollo en polvo o sal al gusto.<br />
          ° Pimienta blanca o negra (al gusto).<br />
          ° Nuez moscada (una pizca, opcional).<br />
          ° Queso en cubos (manchego, chihuahua, cheddar, etc., para decorar).<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/sdmStNG2YMA?si=PsUF7F3Vk5y05i1h", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/sopa5.jpg" className="card-img-top" alt="Sopa de Tortilla" />
        <div className="card-body">
          <h5 className="card-title">Sopa de Tortilla</h5>
          <hr />
          <p className="card-text">
          Una sopa de tortilla rica y reconfortante, elaborada con una base 
          de chiles guajillos y anchos, jitomates, cebolla y ajo, licuados y cocidos en un 
          sabroso consomé. Se sirve caliente, adornada con tiras de tortillas fritas, aguacate, 
          queso cotija y crema, convirtiéndola en un platillo tradicional mexicano que destaca 
          por su sabor y textura, ideal para cualquier ocasión. 
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Chiles guajillos.<br />
          ° Chiles anchos.<br />
          ° jitomates/tomates.<br />
          ° Cebolla.<br />
          ° Dientes de ajo.<br />
          ° Tortillas.<br />
          ° Consomé o caldo de pollo.<br />
          ° Cilantro.<br />
          ° Aguacate.<br />
          ° Sal (al gusto).<br />
          ° Pimienta (al gusto).<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: -- 
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/IrybI0clj0o?si=wt5OCKKxiyGMPPXG", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/sopa6.jpg" className="card-img-top" alt="Sopa de Verduras" />
        <div className="card-body">
          <h5 className="card-title">Sopa de Verduras</h5>
          <hr />
          <p className="card-text">
          Una sopa de verduras vegetariana deliciosa y colorida, elaborada con una mezcla de acelgas, 
          ejotes, papa, chayote, zanahoria y chiles, sazonada con sal y pimienta, y cocinada en un 
          caldo ligero. Esta sopa es reconfortante y nutritiva, ideal para aquellos momentos en que 
          se busca una opción saludable, perfecta para vegetarianos y veganos, y excelente para 
          disfrutar en cualquier ocasión.
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Hojas de acelgas.<br />
          ° Ejotes.<br />
          ° Papa mediana.<br />
          ° Chile morrón verde.<br />
          ° Chile morrón rojo.<br />
          ° Chayote.<br />
          ° Zanahoria.<br />
          ° Chile verde jalapeño (al gusto, picado).<br />
          ° Sal (al gusto).<br />
          ° Aceite de oliva.<br />
          ° Pimienta negra (al gusto).<br />
          ° Agua.<br />
          ° Caldo de verduras (opcional).<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: -- 
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/7TLce_ccVxM?si=xcDsjrDLAx0z-d01", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

  </div>  
</main>
{/* APARTADO DE DESAYUNOS ----------------------------------------------------------------------------------------------------*/}
<div className="categoria-2" id="desayunos">
    </div>
<main className="container mt-5 pt-5">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/desayuno1.png" className="card-img-top" alt="Tortilla de Papas" />
        <div className="card-body">
          <h5 className="card-title">Tortilla de Papas</h5>
          <hr />
          <p className="card-text">
            Un clásico infalible de la cocina española. Suaves trozos de papa y cebolla caramelizada 
            envueltos en un huevo esponjoso, dorado y lleno de sabor. Perfecta para un desayuno 
            contundente o un brunch especial.
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 600 gr de Papas. <br />
          ° 5 a 6 Huevos.<br />
          ° 1 Cebolla Chica (opcional). <br />
          ° Sal (al gusto). <br />
          ° Rebanadas de Queso para derretir.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/ULle2vGte8k?si=r6KU00WXADuaGrHI", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/desayuno2.png" className="card-img-top" alt="Avena con Frutas" />
        <div className="card-body">
          <h5 className="card-title">Avena con Fruntas</h5>
          <hr />
          <p className="card-text">
          Comienza tu día con una avena cremosa acompañada de frutas frescas, 
          una opción saludable y llena de sabor.
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Hojuelas de avena.<br />
          ° Litro de leche de almendra, coco o vaca.<br />
          ° Cucharada de canela en polvo. <br />
          ° Fresas. <br />
          ° Frambuesas. <br />
          ° Zarzamoras. <br />
          ° Moras. <br />
          ° Nuez garapiñada.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: -- 
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/--2sNMMCOKA?si=tONbHJXn3ijf73GG", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/desayuno3.png" className="card-img-top" alt="Huevos Revueltos con Verduras" />
        <div className="card-body">
          <h5 className="card-title">Huevos Revueltos con Verduras</h5>
          <hr />
          <p className="card-text">
          Dale color y nutrientes a tu desayuno con estos huevos 
          revueltos mezclados con una variedad de verduras frescas.
          </p>
          <hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 3 huevos.<br /> 
          °	Media cebolla blanca.<br />
          °	Media zanahoria.<br />
          °	Un trozo de pimentón.<br />
          °	Un poco de brócoli.<br />
          °	Un trozo de calabacín.<br /> 
          °	Aceite de oliva.<br />
          °	Sal al gusto.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: -- 
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/I3_p9mc4LX4?si=klCsMLykekKKs9cN", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/desayuno4.png" className="card-img-top" alt="Panqueques con Miel y Frutas" />
        <div className="card-body">
          <h5 className="card-title">Panqueques con Miel y Frutas</h5><hr />
          <p className="card-text">
          Disfruta de unos panqueques esponjosos cubiertos con miel y una selección 
          de frutas, perfectos para consentirte en la mañana.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Harina de trigo.<br />
          ° Azúcar.<br />
          ° Polvo de hornear.<br />
          ° Bicarbonato de sodio.<br />
          ° Un cuarto cucharadita de sal.<br />
          ° Huevos.<br />
          ° Leche.<br /> 
          ° Mantequilla derretida.<br />
          ° Extracto de vainilla (opcional).<br />
          ° para servir miel al gusto frutas frescas como fresas plátanos arándanos kiwi.<br />
          ° opcional nueces o almendras picadas yogur.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/vSmiyyKSdJE?si=3WSOrxFSh5wgC-A_", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/desayuno5.png" className="card-img-top" alt="Batido de Frutas y Yogur" />
        <div className="card-body">
          <h5 className="card-title">Batido de Frutas y Yogur</h5><hr />
          <p className="card-text">
          Este batido combina la cremosidad del yogur con la frescura de 
          las frutas, creando una bebida vibrante y nutritiva, ideal para
           un desayuno energético o un snack saludable lleno de vitaminas y probióticos.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 1 Vaso de yogurt <br />
          ° 1 cucharada mediana de Semillas de chía <br />
          ° Fruta: (fresa, banano, melón y mango) <br />
          ° ½ taza de leche (o alternativa vegetal como almendra o coco) <br />
          ° Hielo al gusto (opcional)<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: -- 
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/RjaJAx5C4Bo?si=G0SrVvCng8YYDB9T", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/desayuno6.png" className="card-img-top" alt="Tostadas Francesas Saludables" />
        <div className="card-body">
          <h5 className="card-title">Tostadas Francesas Saludables</h5><hr />
          <p className="card-text">
          Estas tostadas francesas saludables son crocantes por fuera y suaves por dentro, 
          con un aroma irresistible a canela y vainilla. Preparadas con pan integral o 
          reciclado, son una opción nutritiva y versátil, ideal para desayunar o merendar
           acompañadas de frutas frescas, frutos secos o un toque de miel. ¡Perfectas para 
           disfrutar sin culpa!
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Huevos.<br />
          ° Leche descremada.<br />
          ° Azúcar mascabo (cantidad reducida, opcional).<br />
          ° Stevia (opcional, para sustituir el azúcar).<br />
          ° Extracto de vainilla.<br />
          ° Canela en polvo (al gusto).<br />
          ° Sal.<br />
          ° Pan integral o de panadería.<br />
          ° Aceite vegetal.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: -- 
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/6E0G3U9hltI?si=B-0wqvvXx1EmE9OK", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>  
</main>

    {/* APARTADO DE PASTAS ---------------------------------------------------------------------------------------------------- */}
    <div className="categoria-3" id="pastas">
    </div>
    <main className="container mt-5 pt-5">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/pasta1.png" className="card-img-top" alt="Pasta con Atún" />
        <div className="card-body">
          <h5 className="card-title">Pasta con Atún</h5><hr />
          <p className="card-text">
          Esta deliciosa pasta con atún, que es cremosa y llena de sabor, 
          adornada con perejil fresco; es perfecta para una cena ligera y 
          nutritiva que seguramente disfrutarás.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 2 cucharadas de aceite de oliva.<br />
          ° 1 cebolla, picada.<br />
          ° 4 dientes de ajo, picados.<br />
          ° 1/2 cucharadita de pimentón dulce ahumado.<br />
          ° 400 ml de salsa de tomate.<br />
          ° Sal y pimienta al gusto.<br />
          ° 450 ml de caldo o agua.<br />
          ° 200 g de pasta penne cruda.<br />
          ° 2 latas de atún, escurrido.<br />
          ° Perejil fresco, picado.<br />
          ° 125 g de yogur griego.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/8G-ZxTjD7Zc?si=FL8uCk5nADgf1wvJ", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/pasta2.jpg" className="card-img-top" alt="Pasta Salteada" />
        <div className="card-body">
          <h5 className="card-title">Pasta Salteada</h5><hr />
          <p className="card-text">
          Pasta salteada jugosa, con trozos tiernos de pavo (o pollo), verduras 
          frescas como pimientos, zanahoria y cebolla, todo integrado en una salsa 
          ligeramente picante gracias al pimiento Scotch Bonnet. La combinación de 
          especias, el toque ahumado del pimentón y el caldo de pollo le dan un sabor 
          profundo y equilibrado, perfecto para una comida reconfortante y versátil que 
          puedes personalizar con tus vegetales favoritos.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Pimiento rojo.<br />
          ° Tomates.<br />
          ° Cebolla.<br />
          ° Pimiento Scotch Bonnet (o otro picante).<br />
          ° Pavo o pollo (deshuesado y cortado en trozos).<br />
          ° Sal.<br />
          ° Ajo en polvo.<br />
          ° Cebolla en polvo.<br />
          ° Pimentón.<br />
          ° Cubos de caldo de pollo.<br />
          ° Pimienta.<br />
          ° Pimiento verde.<br />
          ° Zanahoria.<br />
          ° Champiñones (opcional).<br />
          ° Ajo fresco.<br />
          ° Aceite.<br />
          ° Espaguetis.<br />
          ° Agua.<br />
          ° Condimento para pollo (opcional).<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/B0VtuBNEgII?si=1E3Uc9gZ01f3_6Ss", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/pasta3.jpg" className="card-img-top" alt="Fettuccini con Salsa Alfredo" />
        <div className="card-body">
          <h5 className="card-title">Fettuccini con Salsa Alfredo</h5><hr />
          <p className="card-text">
          Fettuccini Alfredo cremoso y reconfortante, con una salsa suave y 
          sedosa elaborada con mantequilla, nata y queso parmesano, sazonada
           con pimienta negra y decorada con perejil fresco. Ideal para disfrutar 
           como plato principal, ofrece un sabor intenso y equilibrado, perfecto 
           para 3-4 porciones generosas.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Fettuccine (o pasta de tu elección).<br />
          ° Sal.<br />
          ° Mantequilla.<br />
          ° Ajo fresco.<br />
          ° Nata para cocinar (crema espesa).<br />
          ° Pimienta negra molida.<br />
          ° Queso parmesano rallado (o Grana Padano como alternativa).<br />
          ° Perejil fresco picado (para decorar).<br />
          ° Agua de cocción de la pasta (opcional, para ajustar la salsa).<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: -- 
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/rpCe0RPMY94?si=ghG4EHpj-KwuXSi-", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

  </div>  
</main>

    {/* APARTADO DE COMIDAS ---------------------------------------------------------------------------------------------------- */}
    <div className="categoria-4" id="comidas">
    </div>
    <main className="container mt-5 pt-5">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/comida1.jpg" className="card-img-top" alt="Tacos de Bistec" />
        <div className="card-body">
          <h5 className="card-title">Tacos de Bistec</h5><hr />
          <p className="card-text">
          Saborea la tradición mexicana con estos tacos rellenos de carne sazonada y acompañados de tus salsas favoritas.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 2 libras de carne para bistec bien picada.<br />
          ° 1 taza de jugo de naranja.<br />
          ° 1/4 de aceite vegetal.<br />
          ° 3 cdas de salsa inglesa.<br />
          ° 1/4 cdta de orégano.<br />
          ° 1/4 cdta de ajo en polvo.<br />
          ° 1/4 cdta de cebolla en polvo.<br />
          ° 1/2 cdta de sal.<br />
          ° 1/4 cdta de pimienta negra.<br />
          ° 1/4 cdta de mostaza.<br />
          ° 1/4 cdta de comino.<br />
          ° 20 tortillas de maíz pequeñas.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/TdbcEGJayZQ?si=l6a8wGk_N5We5ZkZ", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/comida2.jpg" className="card-img-top" alt="Arroz con Verduras y Pollo" />
        <div className="card-body">
          <h5 className="card-title">Arroz con Verduras y Pollo</h5><hr />
          <p className="card-text">
          Un plato completo y balanceado que une arroz, pollo y una variedad de verduras en una combinación deliciosa.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 400 g de pollo (contramuslos).<br /> 
          ° 160 g de arroz redondo.<br /> 
          ° 700 ml de caldo de pollo o verduras.<br /> 
          ° 1 cebolla pequeña.<br /> 
          ° 1 diente de ajo.<br /> 
          ° 1 trozo de puerro o poro.<br /> 
          ° 1 trozo de pimiento rojo y otro verde.<br /> 
          ° 1 tomate rojo.<br /> 
          ° 1 calabacín.<br /> 
          ° 6 judías verdes.<br /> 
          ° 6 champiñones.<br /> 
          ° 1 zanahoria, guisantes.<br /> 
          ° 1 hoja de laurel.<br />
          ° 3 cdas de aceite de oliva virgen extra (45 ml).<br /> 
          ° 100 ml de vino blanco o caldo.<br /> 
          ° ½ cdta de pimentón dulce o paprika.<br /> 
          ° ¼ de cdta de curry (opcional).<br />
          ° ¼ de cdta de cúrcuma (opcional).<br /> 
          ° Sal y pimienta al gusto.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/q1MlCDo9fxU?si=6g1ByxuJRs9443dh", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/comida3.jpg" className="card-img-top" alt="Pollo al Curry" />
        <div className="card-body">
          <h5 className="card-title">Pollo al Curry</h5><hr />
          <p className="card-text">
          Sumérgete en los sabores exóticos de este plato, donde el pollo se cocina en una rica y aromática salsa de curry.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 2 pechugas de pollo.<br />
          ° 1 cebolla -2 dientes de ajo.<br />
          ° 2 cucharadas de tomate triturado.<br />
          ° 1 o 2 cucharaditas de curry en polvo.<br /> 
          ° 200ml de nata para cocinar.<br /> 
          ° Sal y pimienta.<br /> 
          ° Aceite de oliva.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/qaoKiH_2Fzo?si=jxFAV2WN8ulFoY55", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    </div>
    </main>

    {/* APARTADO DE CENAS ---------------------------------------------------------------------------------------------------- */}
    <div className="categoria-5" id="cenas">
    </div>
    <main className="container mt-5 pt-5">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/cena1.jpg" className="card-img-top" alt="Pizza de Sarten" />
        <div className="card-body">
          <h5 className="card-title">Pizza de Sarten</h5><hr />
          <p className="card-text">
          Esta deliciosa pizza en sartén es una opción rápida y fácil de preparar, 
          con una base de masa suave y esponjosa, cubierta con una salsa de tomate 
          casera, queso derretido y tus ingredientes favoritos, todo cocido a la perfección 
          en la estufa. ¡Ideal para disfrutar en cualquier momento!
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 3 tomates bien maduros.<br />
          ° 1 ajo entero.<br />
          ° 1 rebanada de cebolla.<br />
          ° 1 pizca de sal.<br />
          ° 1 cucharada de azúcar.<br />
          ° 1 pizca de orégano.<br />
          ° (opcional) un poco de chile quebrado.<br />
          ° Un chorrito de aceite.<br />
          ° 1 taza y media de harina de trigo.<br />
          ° ½ cucharada de polvo para hornear.<br />
          ° 1 pizca de sal.<br />
          ° 1 cucharada de aceite de oliva (preferentemente).<br />
          ° ½ taza de agua.<br />
          ° 100 gramos de queso mozzarella (o cualquier otro que se pueda derretir).<br />
          ° Rebanadas de pepperoni (opcional).<br />
          ° Trocitos de piña y jamón (para la pizza hawaiana, opcional).<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/Us6gzsVv_MA?si=DFwPdcDS8CQNI9yC", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/cena2.jpg" className="card-img-top" alt="Hamburguesas" />
        <div className="card-body">
          <h5 className="card-title">Hamburguesas</h5><hr />
          <p className="card-text">
          Estas hamburguesas caseras son jugosas y sabrosas, elaboradas con carne 
          molida sazonada, cebolla y pan molido, acompañadas de queso derretido, 
          tocino crujiente, y frescos vegetales, todo servido en un suave pan y 
          aderezado con mostaza y mayonesa, perfectas para disfrutar en cualquier ocasión.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Carne molida. <br />
          ° Cebolla (picada). <br />
          ° Pan molido. <br />
          ° Huevo. <br />
          ° Sal y pimienta al gusto. <br />
          ° Queso (de tu elección). <br />
          ° Tocino (opcional). <br />
          ° Pan para hamburguesa. <br />
          ° Mostaza y mayonesa. <br />
          ° Lechuga, cebolla y tomate (para acompañar). <br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/RV9HSvC9j0o?si=glTz0zQrSAgULD1E", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/cena3.png" className="card-img-top" alt="Banderillas" />
        <div className="card-body">
          <h5 className="card-title">Banderillas</h5><hr />
          <p className="card-text">
          Las banderillas de salchicha son un delicioso y crujiente aperitivo, elaboradas 
          con salchichas sumergidas en una esponjosa mezcla de Maseca y harina, fritas hasta 
          dorarse y perfectas para disfrutar en fiestas o reuniones, acompañadas de un sabroso
          aderezo de chile chipotle.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          2 litros de aceite vegetal.<br />
          1 taza de Maseca.<br />
          ½ taza de harina preparada para hot cakes (preferiblemente de la marca Tres Estrellas).<br />
          1 huevo.<br />
          ½ cubito de caldo de pollo (opcional, para un sabor más salado).<br />
          1 taza (250 ml) de agua mineral gasificada.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/Yea9MVbAqCc?si=R0uHPJ-cFSUs_a3o", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </main>

    {/* APARTADO DE SNACKS ---------------------------------------------------------------------------------------------------- */}
    <div className="categoria-6" id="snacks">
    </div>
    <main className="container mt-5 pt-5">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/snack1.png" className="card-img-top" alt="Palitos de Queso" />
        <div className="card-body">
          <h5 className="card-title">Palitos de Queso</h5><hr />
          <p className="card-text">
          Crujientes por fuera y derretidos por dentro, estos palitos de queso son el snack perfecto para cualquier ocasión.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 3 tazas de harina.<br />
          ° 2 barras de mantequilla.<br />
          ° 2 ½ tazas de queso cheddar (pueden utilizar el de su preferencia).<br />
          ° 1 taza de crema.<br />
          ° ½ cucharadita de sal ( pueden ajustar la sal a su gusto y dependerá del tipo de queso).<br />
          ° 1 huevo.<br />
          ° 1 cucharada de agua (para barnizar los palitos al final).<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/xIC4WiZ7gyQ?si=V5xRcywJ4C7sO_QW", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/snack2.jpg" className="card-img-top" alt="Galletas de Avena" />
        <div className="card-body">
          <h5 className="card-title">Galletas de Avena</h5><hr />
          <p className="card-text">
          Dulces y saludables, estas galletas de avena son ideales para acompañar tu café o té de la tarde.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° 115 g de copos de avena.<br />
          ° 1 huevo 50 g de harina de trigo integral.<br />
          ° 75 g de azúcar moreno.<br />
          ° 83 ml de aceite de oliva.<br />
          ° 1/2 cdta de esencia de vainilla.<br />
          ° 1 pizca de sal.<br />
          ° 1/4 de cdta de levadura química o polvos para hornear.<br />
          ° 1 manzana.<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/UwUj4M5nLaU?si=Au9f5cNIxIEh5hkB", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 card-hover">
        <img src="../src/image/snack3.jpg" className="card-img-top" alt="Frutas con Yogur" />
        <div className="card-body">
          <h5 className="card-title">Frutas con Yogur</h5><hr />
          <p className="card-text">
          Una combinación sencilla pero deliciosa, perfecta para un snack ligero o un postre saludable.
          </p><hr />
        </div>
        <div className="card-hover-content">
          <hr />
          <p className="ingredients">
          ° Yogur griego natural (sin sabor) o del sabor de tu preferencia (vainilla, fresa, etc.).<br />
          ° Granola crujiente.<br />
          ° Frutas frescas:<br />
          ° Fresas, lavadas y cortadas en rebanadas.<br />
          ° Plátano, pelado y cortado en rodajas.<br />
          ° Arándanos (blueberries).<br />
          ° Miel (opcional, para endulzar).<br />
          </p>
          <div className="card-footer">
            <small className="text-body-secondary">
              Instrucciones de Preparación: --
            </small>
            <button 
                onClick={() => window.open("https://youtu.be/RluxhL1yVb4?si=JVyR0ZGxTvl1Y776", "_blank")}>
                Ver Video
              </button>
          </div>
        </div>
      </div>
    </div>
     </div>
     </main> 
      
      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p>&copy; 2025 DeliRecetas - Todos los derechos reservados -
          Jose Miguel Portillo Pérez, Oscar Daniel Camacho Melgar
        </p>
      </footer>
    </div>
  );
};

export default Recetas;
