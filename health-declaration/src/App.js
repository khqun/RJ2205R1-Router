import './App.css';
import * as Yup from 'yup';
import { Formik } from 'formik';
const DeclarationSchema = Yup.object().shape({
  name: Yup.string().required().matches(/^[A-Z\s]+$/),
  cmd: Yup.number(),
  birth: Yup.number().required(),
  gender: Yup.string().required(),
  national: Yup.string().required(),
  province: Yup.string().required(),
  district: Yup.string().required(),
  wards: Yup.string().required(),
  address: Yup.string().required(),
  phone: Yup.string().required().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),
  email: Yup.string().email(),
  firstQuestion: Yup.string().required(),
  secondQuestion: Yup.string().required(),
  thirdQuestion: Yup.string().required(),
})
function App() {
  return (
    <div>
      <div className='header'>
        <h2>THÔNG TIN KHAI BÁO Y TẾ</h2>
        <h3>(PHÒNG CHỐNG DỊCH COVID 19)</h3>
        <h4 style={{ color: "red" }}>Khuyến cáo: khai báo thông tin sai là vi phạm
          pháp luật Việt Nam và có thể xử lí hình sự
        </h4>
      </div>
      <div className='declaration-form'>
        <Formik
          initialValues={{
            firstQuestion: '',
            secondQuestion: '',
            thirdQuestion: '',
            cross: '',
            name: '',
            cmd: '',
            birth: '',
            email: '',
            gender: '',
            national: '',
            province: '',
            district: '',
            address: '',
            wards: '',
            phone: '',
          }}
          validationSchema={DeclarationSchema}
          onSubmit={
            value => {
              console.log(value);
            }
          }
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit
          }) => (
            <form
              onSubmit={handleSubmit}
            >
              <div><h4>Thông tin cá nhân cơ bản</h4></div>
              <div>
                <p
                  style={{
                    display: "inline"
                  }}>Họ tên (ghi chữ in hoa)<i style={{ color: 'red' }}> (*) </i></p>
                {
                  errors.name && touched.name ?
                    (
                      <input
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "200px",
                          border: "1px solid red",
                        }}
                      />
                    ) : (
                      <input
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{

                          width: "200px"
                        }}
                      />
                    )
                }
              </div>
              <div>
                <p style={{
                  display: "inline"
                }}>Số hộ chiếu / CMND / CCCD</p>
                {errors.cmd && touched.cmd ?
                  (
                    <input
                      name="cmd"
                      type="number"
                      value={values.cmd}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "200px",
                        border: "1px solid red",
                      }}
                    />
                  ) : (
                    <input
                      name="cmd"
                      type="number"
                      value={values.cmd}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "200px"
                      }}
                    />
                  )
                }
              </div>
              <div>
                <p
                  style={{
                    display: "inline"
                  }}>Năm sinh<i style={{ color: 'red' }}> (*) </i></p>
                {
                  errors.birth && touched.birth ?
                    (
                      <input
                        name="birth"
                        type="number"
                        value={values.birth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "200px",
                          border: "1px solid red",
                        }}
                      />
                    ) : (
                      <input
                        name="birth"
                        type="number"
                        value={values.birth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "200px"
                        }}
                      />
                    )
                }
              </div>
              <div>
                <p style={{
                  display: "inline"
                }}>Giới tính <i style={{ color: 'red' }}> (*) </i></p>
                {
                  (
                    <div>
                      <input
                        name="gender"
                        type="radio"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value="nam"
                        required
                      />
                      <label>Nam</label>
                      <input
                        name="gender"
                        type="radio"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value="nữ"
                      />
                      <label>Nữ</label>
                      <input
                        name="gender"
                        type="radio"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value="khác"
                      />
                      <label>Khác</label>
                    </div>
                  )
                }
              </div>
              <div>
                <label>Quốc tịch  <i style={{ color: 'red' }}> (*) </i></label>
                {
                  errors.national && touched.national ?
                    (
                      <select
                        name='national'
                        onChange={handleChange}
                        style={{
                          width: "100px",
                          border: "1px solid red",
                        }}
                      >
                        <option value="">Chọn</option>
                        <option value="Vn">Việt Nam</option>
                        <option value="Tq">Trung Quốc</option>
                      </select>
                    ) :
                    (
                      <select
                        onChange={handleChange}
                        name='national'
                        style={{
                          width: "100px"
                        }}
                      >
                        <option value="">Chọn</option>
                        <option value="Vn">Việt Nam</option>
                        <option value="Tq">Trung Quốc</option>
                      </select>
                    )

                }
              </div>
              <div><h4>Địa chỉ liên lạc tại Việt Nam</h4></div>
              <div>
                <label>Tỉnh thành  <i style={{ color: 'red' }}> (*) </i></label>
                {
                  errors.province && touched.province ?
                    (
                      <select
                        name='province'
                        onChange={handleChange}
                        style={{
                          width: "100px",
                          border: "1px solid red",
                        }}
                      >
                        <option value=''>Chọn</option>
                        <option value="Hn">Tp Hà Nội</option>
                        <option value="Hcm">TPHCM</option>
                      </select>
                    ) :
                    (
                      <select
                        onChange={handleChange}
                        name='province'
                        style={{
                          width: "100px"
                        }}
                      >
                        <option value="">Chọn</option>
                        <option value="Hn">Tp Hà Nội</option>
                        <option value="Hcm">TPHCM</option>
                      </select>
                    )
                }
              </div>
              <div>
                <label>Quận/ huyện  <i style={{ color: 'red' }}> (*) </i></label>
                {
                  errors.district && touched.district ?
                    (
                      <select
                        name='district'
                        onChange={handleChange}
                        style={{
                          width: "100px",
                          border: "1px solid red",
                        }}
                      >
                        <option value="">Chọn</option>
                        <option value="Lb">Long Biên</option>
                        <option value="Bđ">Ba Đình</option>
                      </select>
                    ) :
                    (
                      <select
                        onChange={handleChange}
                        name='district'
                        style={{
                          width: "100px"
                        }}
                      >
                        <option value="">Chọn</option>
                        <option value="Lb">Long Biên</option>
                        <option value="Bđ">Ba Đình</option>
                      </select>
                    )
                }
              </div>
              <div>
                <label>Phường Xã <i style={{ color: 'red' }}> (*) </i></label>
                {
                  errors.wards && touched.wards ?
                    (
                      <select
                        name='wards'
                        onChange={handleChange}
                        style={{
                          width: "100px",
                          border: "1px solid red",
                        }}
                      >
                        <option value="">Chọn</option>
                        <option value="Gv">Giảng Võ</option>
                        <option value="Tc">Thành Công</option>
                      </select>
                    ) :
                    (
                      <select
                        onChange={handleChange}
                        name='wards'
                        style={{
                          width: "100px"
                        }}
                      >
                        <option value="">Chọn</option>
                        <option value="Gv">Giảng Võ</option>
                        <option value="Tc">Thành Công</option>
                      </select>
                    )
                }
              </div>
              <div>
                <p
                  style={{
                    display: "inline"
                  }}>Số nhà, phố, tổ dân phố/thôn/đội<i style={{ color: 'red' }}> (*) </i></p>
                {
                  errors.address && touched.address ?
                    (
                      <input
                        name="address"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "200px",
                          border: "1px solid red",
                        }}
                      />
                    ) : (
                      <input
                        name="address"
                        type="text"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "200px"
                        }}
                      />
                    )
                }
              </div>
              <div>
                <p style={{
                  display: "inline"
                }}>Số điện thoại<i style={{ color: 'red' }}> (*) </i></p>
                {errors.phone && touched.phone ?
                  (
                    <input
                      name="phone"
                      type="text"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "200px",
                        border: "1px solid red",
                      }}
                    />
                  ) : (
                    <input
                      name="phone"
                      type="text"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "200px"
                      }}
                    />
                  )
                }
              </div>
              <div>
                <p
                  style={{
                    display: "inline"
                  }}>Email</p>
                {
                  errors.email && touched.email ?
                    (
                      <input
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "200px",
                          border: "1px solid red",
                        }}
                      />
                    ) : (
                      <input
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "200px"
                        }}
                      />
                    )
                }
              </div>
              <div>
                <p style={{
                  fontWeight: 'bold'
                }}>Trong vòng 14 ngày qua, Anh/chị có đến tỉnh/thành phố, quốc gia/vùng lãnh thổ nào (có thể đi qua nhiều nơi)</p>
                <div>
                  <input
                    name="cross"
                    type="radio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="yes"
                  />
                  <label>Có</label>
                  <input
                    name="cross"
                    type="radio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="no"
                  />
                  <label>Không</label>
                </div>
                <div>
                  <p style={{
                    fontWeight: 'bold'
                  }}>Trong vòng 14 ngày qua, Anh/chị có thấy xuất hiện ít nhất 1 trong các dấu hiệu: sốt, ho, khó thở, viêm phổi, đau họng, mệt mỏi không?<i style={{ color: 'red' }}> (*) </i></p>
                  <table>
                    <thead>
                      <tr>
                        <th className='question'></th>
                        <th className='yes'>Có</th>
                        <th className='no'>Không</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr >
                        <td>Người bênh hoặc nghi ngờ, mắc bệnh COVID-19<i style={{ color: 'red' }}> (*) </i></td>
                        <td className='question_form'>
                          <input
                            name="firstQuestion"
                            type="radio"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="yes"
                            required
                          /></td>
                        <td className='question_form'>
                          <input
                            name="firstQuestion"
                            type="radio"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="no"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Người từ nước có bệnh COVID-19<i style={{ color: 'red' }}> (*) </i></td>
                        <td className='question_form'>
                          <input
                            name="secondQuestion"
                            type="radio"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="yes"
                            required
                          /></td>
                        <td className='question_form'>
                          <input
                            name="secondQuestion"
                            type="radio"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="no"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Người có biểu hiện (Sốt, ho, khó thở, Viêm phổi)<i style={{ color: 'red' }}> (*) </i></td>
                        <td className='question_form'>
                          <input
                            name="thirdQuestion"
                            type="radio"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="yes"
                            required
                          /></td>
                        <td className='question_form'>
                          <input
                            name="thirdQuestion"
                            type="radio"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="no"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <p></p>
              </div>
              <div style={{marginLeft: '30%' }}>
                <button type="submit" className='submit_button'>Gửi tờ khai</button>
              </div>
            </form>
          )}

        </Formik>
      </div>
    </div>
  );
}

export default App;
