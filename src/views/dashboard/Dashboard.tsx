import React from 'react'

// import { Container } from './styles';

function Vendedores() {
  return (
    <section className="signa-table-section clearfix table-responsive">
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h4 className="text-center mb-10">ACOMPANHAMENTO DAS VENDAS - AMAVIA METRÔ BAHIA</h4>
            <table className="table table-striped table-bordered">
      <thead className='th__dominio'>
        <tr>
          <th className='text-center' scope="col" colSpan={1}>Conta Dóminio</th>
          <th className='text-center' scope="col" colSpan={2}>Arquivo</th>
          <th className='text-center' scope="col" colSpan={2}>Banco</th>
          <th className='text-center' scope="col" colSpan={1}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td>01/01/2021 01/01/2021 01/01/2021</td>
          <td className="text-info">R$900,00</td>
          <td className="text-danger">R$900,00</td>
          <td className="text-info">R$1000,00</td>
          <td className="text-danger">R$1000,00</td>
          <td>✓</td>
        </tr>
        <tr className='text-center'>
          <td>01/01/2021 01/01/2021 01/01/2021</td>
          <td className="text-info">R$900,00</td>
          <td className="text-danger">R$900,00</td>
          <td className="text-info">R$1000,00</td>
          <td className="text-danger">R$1000,00</td>
          <td>✓</td>
        </tr>
      </tbody>
    </table>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Vendedores
