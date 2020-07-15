import React from 'react'
// IMPORTAR ICONOS PARA LA TABLA 

const Table = (props) => {
    const config = props.configTable

    var headers = 
        config.headers.map( element => {
            return ( <th> {element} </th>)
        })

    var body = 
        config.body.map( doc => {
            return (
              <tr>
                {doc.map( (campos,i) => { 
                    if ( i == doc.length-1  ){
                        return (
                            <>
                            <th> {campos} </th>
                            <th> UpdateButton </th>
                            <th> DeleteButton </th>
                            </>
                        )
                    }
                    return <th>{campos}</th>
                })}
              </tr>
            )
        })

    return (
        <table>
            <thead>
                <tr>
                    { headers }
                    <th> Update </th> 
                    <th> Delete </th> 
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    )
}
export default Table