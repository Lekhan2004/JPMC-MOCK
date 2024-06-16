import React from 'react'
import { Link } from 'react-router-dom'
// import { FaBars } from  'react-icons/fa'
// import {AiOutlineClose} from 'react-icons/ai'

function Header() {
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className="nav__logo">
               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISEhIVExUXFRcVFRcTFRUWFhgXGBYWGBgVGhUZHSggGBolHRYXITEiJSkrLi4uGB8zODMtNygtLi0BCgoKDg0OGhAQGy0lICUtLTUvLy0tLS0tLy8tLS0tLS0tLS0tLS0tLS0uLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIHAf/EAEAQAAIBAgMECAMFBgUFAQAAAAABAgMRBBIhBTFBcQYTIlFhgZGhMrHBQlJi0fAUI0NykuEzU3OywhUWJGOCB//EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EADARAAIBAgQCCgICAwEAAAAAAAABAgMRBBIhMUGBEyJRYZGhsdHh8HHBMvEFM0Ij/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYza22cS80qfZjdqKVr6O17s2ZTY7Y2ZuVOWRvfFrNF/VfrQ0YecIy668TJjKdWcV0bfLT28Loz2y+ldWLtV7a4ppRa5P8/U2WFxMKkVODun+rNcGY/G7BqR/h3X4e36cV6HnZGMlQldXcXpKPfy5GqrQhUWana/dxPPoYqrQlkrXt37rnu19RugcqFaM4qUXdPcV+0a9WNSDgk4W1XFvir8Hbd5nnxg5O3qevOooxzbru15/g67ZxUqVKU479Er7ld7yq2DtipKfV1Xmv8MrJO++ztpa1y5xdNVqTSekkmn6NGTrx6ucJJbrO3c09V6qxqw8ITg4NamDF1KlOrGon1bcu/wAv0bgHiE00mtU1dcmezGemAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLicDTqfFFN9+5+qJQOptO6OSipKz1KijgZ0W3TeeD3wej5p7r+h7xG1KVmne9tYtNP8lzLQjYzCQqK0lrwa3rzLM6lK8/Hj98+8odKUI2pPk9uXZ5ruKro/jP4Un4x+q+vqR+kNK1Tms3nufyQxWD6t2ktPszWnqu8iYhybvKTlpZNu+hsjFOp0i4nnTk1S6KS1X2z/VuBadHsfddVLevh8V3eXy5F6YdppprRruNBs3a6laNRpS79yf5Mpr0XfNE04TEqyhPl7excAAyHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAArseryhGTcYO97cd1k36koxu7EJyyq5K/aYXtmjfmjuUtbZUFubXnc5UlUpPsu67uHp+RZ0cWuq/Ep6acX14+Bfgi4TFxqLTR8U/wBaolFTTTszRGSkro51aaknGSumZjFYZwk4vyfeuDNWVW3KekZeNvXX6F1CeWVu0zYqmpQzcV6FE4nKpT4reSmjzKBtzHluJ+4La1SnpvXdL6Ph8i9wW1qdSyvll3S48nxM1Vh4ETMVzownvuW08RUp7arsf67D6CDL7J2w4tRqO8N13vj58Uacx1Kbg7M9ShWjVV1zKVbeh1qp5WoyeWM7qzd7bu6/Euz51Wc1OMHvjPL5p2PopdiaUadrfe/mZsFiJ1c2bhbz4cmARcVjqdO2eajfdfe/LedaNWMkpRaknua1Rms7XtobMyvlvqdQAcJAAAAAAAAAAAAAAAA8VKakrSSa7mewAQVgEvhlKPhe69GHgn9+/NfkycCeeRX0UOwpquEqReZLVcU/oTMHjM3ZlpL5/wB/AmnGtQjLeuT4rzOuebSRFUsjvFkWti5U5tSV4vc1v5eJF2pjYSjGKfG+unhb3JtRuKtNZ4d/Fc19UVFelTzXhr4ta8rllNJu/wDRTVckmr79u/8ARwaP2L4H60eWjQY7WPNWmQcRS4otYaojYinbU7GXBnJx4oq4S1NnsStmow11XZfk7L2sYzFRs+Z7pVJZWszSe9JtJ81xO1KfSKxGjW6GWa1ybOMamOjl1WfN4PLFX97murVVGMpS3RTb5JXZj+ivaxMvwQ920vqaHpHLLhqr8EvWSX1KK6zVIw/CNWFllozqvtb8r2MlPaDnOdSe+XsuCXgjQ9D2+rn93Pp6K/0MtgMJKtUVOHNvglxbPoOEw0acFCK0S9e9vxbL8ZKMYZFxtySMv+OhOc+klsr829/nkSAAeae2AAAAAAAAAAAAAAAADzJ2QB6BTbC2tKu6ylDJklG3KSb19C5JTg4SyshTqRqRUo7fNv0ADzKSSu9CJM9FZi8IleSWnFLh4rw8CXTxcJOylr43XzJBJNxZBqM0Z2vTtu3EeRY4+lkenwv2fcV0jVB3RgqRs7HfDLR8zzWhdMkUqdopep4qI5m1uiWTq2KLHLs+Z4touR02nopc/qc+C5GuJ581oe+iNdRxVSLds27z1XzXqXXS/GRVNUk+1JptdyWuvnb3MvWoxzZ7a2tz8uJ+YWn1tSFNfaaT5X1ZzoY9Iqjex14mXROlFb/vh895sOiuB6uiptdqp2ny4L6+ZeHlK2iPR5k5ucnJ8T3KVNU4KC4AAESYAAAAAAAAAAAAAOGLqOMezveiOpXON2VzuClltGVOznK93a1l52sXKOzg4kadRT2KXo7h8nXL/wBjh5RWnsy7K3Y/8b/Wn9LexZFmId6j+8CvDRUaSS+6ghbRi3GK4XVyaeGk13plUXZ3LZRurFLidntNyhJt/dbVtO7uO+ytpKXYlpJaa7+T8TtWpTj8PbXd9pfmVuKowm76xmuK0lyfeWrrKzKH1ZXWjLrGU80JLwuua3FFhVea/XA6vGVVHJJp8L21sRadSzT7mWU4NJoqq1Iykn2e5aTRwqHabI9RkIlk0Z/a1TevvPs6rWzVzynouS+R421Sd4/hkmvN3/5ex6vouR6KirJo8Zzbk4vgRcXLcix6IUc1dS+6m/a31KrGS18jRdCKetWXdGK/qbf0RGs//OX49dCzDq9aH59Nf0a4AHknvgAAAAAAAAAAAAAAA8zinoz0ACDPZ0G9W2t9tCcAdcm9yMYKOyK7CQy1ay4NwqR801L3j7osSBjpZLVbXyXUrb8rtf0aT5J95Q9Jttw/cqlO7zX7N1qlpf3L4UpVZK3Hj+Fb28TNUrww8JX4a24u7v5a+BYdLW/2dpNpO6dnb7LaV+669j10Pb/ZKV3fR/Nk3aeG62lKK3tXXNa/28yH0Uf/AI8Y/dlKP69Re+HsuEl6M44tYtN8Yv1RdHGvh4z+JefH1OwM5ravozJ16DjWm7yacXvb0UJRj8O5auWq33PxRbdkrt7kizyZcRNRineMptdm8oy6tZd973jJ3emtvFQqcurqrik9H3prR+jNNKbaa4mLEU1Fp8CTSqXilxWjXFNHOpIi7eryVVKEsjlC7llzcbJWs/0iDgsbJuKcs2aL8nHRtO17Zk1Z+3Fpug27WfA9bUXHuV/S5Db0JePjmVu9NfIiyiskpt7na3Hdc2wfVSPNqrrSaK2u7zt42Nt0PpWpSl96btySS+dzEYeDd5fq/E+jbEw+ShSi96V3zerXuVYqVqdu1l+Ajes32L1+ssAAeceyAAAAAAAAAAAAAAAAAAClw3SGjPEPDxvmV0nwbV217MujAUsBGhiqE/xvM/5s0Xfky+jTjNSvvbQyYmrOnKGXZvXy9zeSimmnqnoz59tXYWSq5XbS0V++6cX6aPxTPohU7boZo38Mr+a9015ncNVcJW4MjjqCqU78V99iRsmrmo0n+FJ81o/dEaj+6xEo/ZrLNH+ZfEvO9zl0XrXpyh91/PR+6fqd9uw/dqe5waafFcPm0/IWtVlDg9PHVeZ1TcqEanGOvhpLxV+dnwLUEHAYvrFaScZpdqLTT8Gr8GQcZKtKtLDqScakHNSlFWhBNRnGy+JtyVr8LlDTi7M1RkpK62O9XDqWIu9P3Taa+JNSSunutrut38GVG36WSpFq0XJa2+CUru7t9lu/vxLL/t6n/mVbZMls+lv5bWtbTLbL4FDtedRVYYeVstKndySVpxm2oRs9zWR3tpZosofzRTiv9TOWJx15UpShd3dN2eZb1Z7r/ad9CHJSWK0XBPuioyXaSXe8qfNJ8WdsFhMlNSjrLPKbzSloqjfZ3P4ez/ScMZT6uSnUf7ybUYqMnZNp2S8r624d5oUTI5qxYqV5xXO/oRNrQk5KlHe3b31fL8zts1Nttu+Xst2td6O/o0/MlVuLNMdNDFLXU5YXDKdSlRiuzufe0tW/D+6NyZ/o1g7Z60t8uxHknq/OXyRoDFiZ3llWy+s9TBUssMz3l6cPfmAAZjYAAAAAAAAAAAAAAADynfcea1PMmjhg8M4Zryvdqy4KysdsrbkW3mtbQlmZ6RYLVtc16p+0v9yNMR8ZQzxtx4fk/Bk6U8krlWIpdJBxOWysV1lOMuO580etpf4cucf9yKbBSlQqSTTyveuK/Pn4ssMdi4ySjF34v6L1+ROVO09NiqNZOk1Le1vL7fvKjA1epqX+y9H+vJMs8RjoVMkFdpzjmuuCadvWxB6rNr8zl1Nt3saXGMpZnuZFOcIuK2f3zL3aGE6yN1pOOsJLRp91+5lPs3a2apaqrTV1GVrXSsmrcH8XmXeCxWeP4lo149/IocXsWvJ3UrTX2l1ahJ6dp6ZovS+6XNmWLilkny7vg2zjJvpaPNdvz5mofeYbbVfNXlLlG/4buz+RqOqlk6tzi6ig7O3ZUnfK3FNaLTuuYra8Kul283aj/Dy2jJreo3tr3E8N/IhjG8lr6X++pxp49/vqUIzlOMpO8YykleSqJOy7pLQkyqQxFaFNqdOUafWSUtLx1h2Vfvk1ey3EjoZTThUk3mvKXata8szu7cNHEmVsvW53vjlgvFye73XuXNtMzJJxu0eIJR07rKXin8M/nfz7hXO9ePHg+xLk9z9Xb/68CLUldRfJlkGUVFobHDrsxtuyr5HUi7OqZqUH4Jemj+RKPNasz24u8UwADhIAAAAAAAAAAAAAAAAAAAAA416EZq0lfu71yZSzoqMnF62e8ttoQk4PK2nv0KHA4OrZylJy4abvQ0UXZXuY8QrySS1JtRK1jllsepxa0YcS1aFDI8k1ubXjFtP1RWYyrWV31tSUeN5PTmrlw0cZUE3fcyyMrFMotqydiJ0WxSzzinfRP8/oVe3ptTjCzblJpJcbym29PBfIu8Lg1TqOSSV01ppe7W9eW89zjepTdtXmgucsrWvDSD9Udckp5kcUG6ap95m8XtCOBnh3JqNOUstfhkTVlL+VScFy11V7TsDVdRQutVUipf6nxNX8P+XgZ/8A/XIKl+zTspTUnKKnHNCeXLeEo7mu09/itG23p9iQSoUkpZoxcLS0vUm5xvVv3yV33WqW3pmZVLyZtdG0ES9r1lTpSvd3TirJvVrwKmjOLvOGkZvPus3dK7a77r2Jm2KiqTVLfGPbqd2m6Py08U+BwwOGzSUacUrvRJJK71vp5s0wXFmKo+CNZsL/AAYc5f7mWJXTnDD0Vd3UVbxbeunndnLZe1eulKOVJJJ3TuteD03mKUXPNNLQ9KFSNNQpSfWsvT4ZbAAqNAAAAAAAAAAAAAAAAAAAOWIpZouN2rret68UdQDjV1ZlXDaKp9is7SXG2kvHmQsJjG5u26Um7c2d9tY2lSlT62LtJNZ7XjFpq1/HV6FbjLwp9bSqZkmnfTW+lvc104KWtrX8Dz61Vxur3y+Nuf30OtbGrPONvhs3fe0/tLwJiemhn8bjlNRmouM1o7fajxSfNXO2B2hZW+JcO9Gh0XYyxxEc2+hbyR+Rdnd7uJDe0E90fU8qTlvdiOR8SfSr/nU7J3emt2ToYVZXF73xW+LTumvFNJ370iPRkluOnXFc7vQsp2Wr3Mn05wMsdhcPBJKr1tN+EM3YqP8AlWZytxUUWG0cTGlh1CnfsxSg9NMvw85NrzbfDVVHSXHzhOEKVpt5kktHeU4tKTu9LKSvZcNNSLtOFSUZRbedxluv2W1a9l3XWm+8ovecjTtftJ1Kt7K+hb4SnKSc56Znmtxtwv4at24XtwOtLE5ZpU7upwUFd/rmKtZNaSWu56cdzLXo5Vw9CleUkqjvnbTcnry1RqneEdFcwU7VJ2csvwdv+kVa9pYieVcIxtf20XuXWDwsKcckI5V833t8WZraPSWT0orKvvNJt+W5e/kNkbUqyqQjnlNuXaTStbi720tvM86NaULyskuH3TzNdLE4aNS0Ltv/AK3vfTd6+GhrgAYT1QAAAAAAAAAAAAAAAAAAQ8VinFpJX72yYc6tFS3kotX1IzTa6pyweKVSLa4NxfFXX0K/aewaVVNxXVz+9FKz5x4/MtKNGMFaKst/n3nU6puMrwdiEqUakMtRXMBiIVMM8lWGaD4rXzX6ueIxT1g8y/Xqb2tTjJOMkpJ709UZ/HdFoO7ozdN92+P9jdTxcX/PR+R5Vb/Hzj/r1Xg1z7Pttyki2uD9DvTrnjE7JxtP7EKi743Xtq/YguVZb6VvP80allnqncxSU6bs01+S2WKOdXEOWl7LwKvNVe6MVzu/od6WzK8+E3yTS9dxxwSOqpKWi8iJi7U5dZBp23xy3kk/jlF77tJXXHKRaNWU5NRknFtylJLV2lpFSu1o35aLlqcJ0WqP4rQXi8z9Fp7l1s7YdKjJzScpPi3e2rfZjuje+tt/EzTrU47O/wCPfY2UsNWqLVW737b+NjObN6O1ZqOnVwSSTe+y3Wjv9TQ4To7Rh8SdR98m7f0rQuQZZ4ipLZ2Xd9ub6eCpQ1au+1/fntbI37DS/wAqH9MfyPVChCPwwjHlFL5HcFLk3uzTlS1SAAOEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAduAABdgAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=" alt="Nav logo"/>         
            </Link>
            <ul className="nav__menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
            
            {/* <button className="nav__toggle-btn">
                <AiOutlineClose/>
            </button> */}
        </div>
    </nav>
  )
}

export default Header