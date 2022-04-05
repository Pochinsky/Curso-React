import React from "react"
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatAmount , formatDate } from "../helpers"
import AhorroIcon from '../img/icono_ahorro.svg'
import CasaIcon from '../img/icono_casa.svg'
import ComidaIcon from '../img/icono_comida.svg'
import GastosIcon from '../img/icono_gastos.svg'
import OcioIcon from '../img/icono_ocio.svg'
import SaludIcon from '../img/icono_salud.svg'
import SuscripcionesIcon from '../img/icono_suscripciones.svg'

const iconDict = {
  ahorro: AhorroIcon,
  casa: CasaIcon,
  comida: ComidaIcon,
  gastos: GastosIcon,
  ocio: OcioIcon,
  salud: SaludIcon,
  suscripciones: SuscripcionesIcon
}

const Spending = ({spending, setEditSpend}) => {
  const {category, name, amount, date, id} = spending
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditSpend(spending)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
  const trailingActions= () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('Eliminar')}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
            <div className="contenido-gasto">
              <img src={iconDict[category]} alt={`foto de ${id}`} />
              <div className="descripcion-gasto">
                <p className="categoria">{category}</p>
                <p className="nombre-gasto">{name}</p>
                <p className="fecha-gasto">
                  Agregado el: <span>{formatDate(date)}</span>
                </p>
              </div>
            </div>
            <p className="cantidad-gasto">{formatAmount(amount)}</p>
          </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Spending