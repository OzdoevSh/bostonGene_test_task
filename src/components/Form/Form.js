import React from 'react';
import './Form.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ru from 'react-phone-input-2/lang/es.json'



class Form extends React.Component {
    state = {
            title: null,
            description: null,
            phone: null,
            cities: null,
            inf: []
      }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    
    

    onSubmit = (e) => {
        e.preventDefault();
        const {
            inf,
            title,
            description,
            phone,
            cities
        }=this.state
        const newInf = inf
        newInf.unshift({title, description, phone, cities})
        console.log(newInf)
        if (phone.length===11){
        this.setState({
            inf: newInf
        })}
        else(alert('Проверьте правильно ли введен номер телефона'))
    }

    deleteAd = (i)=>{
        const delInf = this.state.inf
        delInf.splice(i, 1)
        this.setState({
            inf: delInf
        })
    }


    render(){
        return (
            <div>
            <form className="formClass" onSubmit={this.onSubmit}>
                <h3 className="adWord">Объявление</h3>
                <div><input type="text" name="title" value={this.state.title} onChange={this.onChange} maxlength="140" placeholder="Введите заголовок" required/></div>
                <div className="descClass"><textarea type="text" name="description" value={this.state.description} onChange={this.onChange} maxlength="300"  placeholder="Описание"/></div>
                <div className="phoneClass"><PhoneInput localization={ru} onlyCountries={['ru']} disableDropdown={true} country={'ru'} value={this.state.phone} onChange={phone => this.setState({ phone })} /></div>
                <div><select  className="selectClass" name="cities" value={this.state.cities} onChange={this.onChange}>
                    <option disabled selected>Выберите город</option>
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                    <option>Казань</option>
                    <option>Нижний Новгород</option>
                </select></div>
                <div><button className="formButton" type="submit">Добавить объявление</button></div>
            </form>
            <div>
                {this.state.inf.map((item)=>{
                    return(
                        <div><h1 className="adWordOutput">Объявления</h1>
                        <div className="ad">
                            <div className="titleClassOutput">{item.title}</div>
                            <div className="descClassOutput">{item.description}</div>
                            <div className="positionClass"> <div className="phoneClassOutput"><b>Телефон:</b>{' +'+item.phone[0]+' ('+item.phone[1]+item.phone[2]+item.phone[3]+') '+item.phone[4]+item.phone[5]+item.phone[6]+'-'+item.phone[7]+item.phone[8]+'-'+item.phone[9]+item.phone[10]}</div>
                            <div className="cityClassOutput">{item.cities}</div>
                            <div><button className="deleteButton" type="submit" onClick={this.deleteAd}>Удалить</button></div></div></div>
                        </div>
                    )
                })}

            </div>
            </div>
        )
    }
}

export default Form