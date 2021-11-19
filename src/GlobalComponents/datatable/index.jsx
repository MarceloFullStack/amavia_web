import {
  CButton,
  CDataTable
} from "@coreui/react";

export default function Datatable({items, fields, props, handleEdit, handleDelete}) {

  return (
    <>
      <CDataTable
        items={items}
        fields={fields}
        // columnFilter
        tableFilter={{ label: "Buscar", placeholder: "Buscar..." }}
        // footer
        itemsPerPageSelect={{ label: "Itens por página", placeholder: "" }}
        itemsPerPage={5}
        hover
        sorter={false}
        border
        pagination
        scopedSlots={{
          edit: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="info"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    handleEdit(item);
                  }}
                >
                  Editar
                </CButton>
              </td>
            );
          },
          delete: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="info"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    handleDelete(item);
                  }}
                >
                  Deletar
                </CButton>
              </td>
            );
          },
        }}
      />
    </>
  );
}
