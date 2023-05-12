import React from 'react'
import { useForm } from 'react-hook-form'
import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  CircleMarker,
  Polygon,
} from 'react-leaflet'
/* Полигон не заработал хз почему
const colorOptions = { color: 'purple' }
const centerPolygon = [
  [
    [55.67428142540128, 37.01673572550138],
    [55.670143036450916, 37.01840942375674],
    [55.67040926177906, 37.011156731316845],
    [55.675080011478045, 37.009740525100774],
  ],
]
*/
const center = [55.67191023776765, 37.01454708640524]

/* register  -функция принимает значение которое пользователь ввел в поле и проверяет его и будет вызвана в момент отправки формы 
handleSubmit - функция собирает поля формы в data */
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(watch('example'))
  return (
    <div>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Заявка на обратную связь</h2>
        <div className="input-group mb-3">
          <input
            {...register('lastName', {
              required: true,
              maxLength: 50,
              pattern: /^[А-Яа-я]+$/i,
            })}
            type="text"
            className="form-control"
            placeholder="Фамилия"
          />
          {errors?.lastName?.type === 'required' && (
            <p>Это поле не должно быть пустым</p>
          )}
          {errors?.lastName?.type === 'maxLength' && <p>максимум 50 знаков</p>}
          {errors?.lastName?.type === 'pattern' && <p>Только русский язык</p>}
          {<br />}
        </div>

        <div>
          <input
            {...register('firstName', {
              required: true,
              maxLength: 50,
              pattern: /^[А-Яа-я]+$/i,
            })}
            type="text"
            className="form-control"
            placeholder="Имя"
          />
          {errors?.firstName?.type === 'required' && (
            <p>Это поле не должно быть пустым</p>
          )}
          {errors?.firstName?.type === 'maxLength' && <p>максимум 50 знаков</p>}
          {errors?.firstName?.type === 'pattern' && <p>Только русский язык</p>}
          {<br />}
        </div>

        <div>
          <input
            {...register('patronymic', {
              required: true,
              maxLength: 50,
              pattern: /^[А-Яа-я]+$/i,
            })}
            type="text"
            className="form-control"
            placeholder="Отчество"
          />
          {errors?.patronymic?.type === 'required' && (
            <p>Это поле не должно быть пустым</p>
          )}
          {errors?.patronymic?.type === 'maxLength' && (
            <p>максpмум 50 знаков</p>
          )}
          {errors?.Patronymic?.type === 'pattern' && <p>Только русский язык</p>}
          {<br />}
        </div>

        <div>
          <input
            {...register('email', {
              required: true,
              maxLength: 100,
              pattern: /^[A-Za-z@._-]+$/i,
            })}
            type="text"
            className="form-control"
            placeholder="email"
          />
          {errors?.email?.type === 'required' && (
            <p>Это поле не должно быть пустым</p>
          )}
          {errors?.email?.type === 'maxLength' && <p>максимум 50 знаков</p>}
          {errors?.email?.type === 'pattern' && <p>Только русский язык</p>}
          {<br />}
        </div>
        <div>
          <input className="btn btn-outline-primary" type="submit" />
        </div>
      </form>
      <br />
      <MapContainer
        center={center}
        zoom={10}
        style={{ width: '100vw', height: '500px' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=0ipQU18cBiwpim3T8foz"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <CircleMarker
          center={center}
          pathoptions={{ color: 'black' }}
          radius={10}
        />
        <Marker position={center}>
          <Popup>При нажатии</Popup>
          <Tooltip>При наведении</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Form
