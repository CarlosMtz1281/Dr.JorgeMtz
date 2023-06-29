import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


/* USE https://mui.com/material-ui/react-accordion/*/
export default function FAQ(){
    return (
        <div className="FAQsection">
            <h1 className="tituloSection2" id="FAQSection">Preguntas Frecuentes</h1>

            <div className="acordionWrap">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>¿Me va a doler el tratamiento?</Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Para todos los tratamientos se aplica anestesia local, sin embargo antes de inyectarla, se utiliza un anestésico tópico (en crema), el cual ayuda a disminuir las molestias de la administración del anestésico local. Una vez que se tiene anestesiada (adormecida) la zona, lo único que se siente durante el procedimiento son presiones, ruidos, vibraciones, etc., pero no se siente dolor.
                            </Typography>
                        </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>¿Me voy a inflamar mucho?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        La inflamación es una respuesta de defensa de un organismo sano, a cualquier tipo de traumatismo (incluyendo un tratamiento quirúrgico). Es por eso que le se considera normal; sin embargo, llevamos a cabo varias medidas para limitar dicha reacción, como por ejemplo: una cirugía cuidadosa y que dure un tiempo corto, administración de antiinflamatorios (cuando esté indicado), aplicación de compresas frías, etc. Todo lo anterior, ayudará a tener menos inflamación y durante un tiempo más corto.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>¿Cuánto tiempo me va a durar la inflamación?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Aunque esto es sumamente variable, la mayoría de las personas experimentan el mayor grado de inflamación durante el 3er día posterior a la cirugía, y en los siguientes días va disminuyendo paulatinamente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>¿Qué cuidados debo tener después de mi cirugía?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Para disminuir el riesgo de sangrado, es conveniente no escupir, no hacer enjagatorios (de ningún tipo), no usar popote, no cepillar los dientes, sino hasta el día siguiente, y enjagar muy suavemente.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>¿Qué puedo comer después de mi cirugía?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    El primer día se recomienda solamente consumir alimentos frios y líquidos (o muy suaves), como por ejemplo, nieve, yogurt, gelatina, licuados, etc. El segundo día se pueden consumir alimentos blandos (al tiempo), como por ejemplo, frijoles, pastas, huevo, puré de papa, aguacate, etc. Y a partir del tercer día se pueden consumir todos los alimentos que el paciente tolere sin que le lastimen
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>¿Puedo hacer ejercicio después de mi cirugía?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Se recomienda abstenerse de todo tipo de esfuerzos o ejercicio que eleven la presión arterial y la frecuencia cardiaca, durante los siguientes 7 días de la intervención, ya que de lo contrario se incrementa el riesgo de presentar un sangrado
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>¿En cuánto tiempo me puedo recuperar de la cirugía?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    La mayoría de las personas presentará muy poca inflamación después del 4o día de la cirugía, y para el 7o día se encontrarán en condiciones casi normales; sin embargo, cada organismo responde de diferente manera, y tiene mucho que ver los cuidados que se tengan en casa.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>


        </div>
    )
}