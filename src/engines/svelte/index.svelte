<script>

    var {data} = require("./store");

</script>


<table>
    {#each $data as row}
        <tr>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.postId}</td>
          <td>{row.email}</td>
          <td>{row.body}</td>
        </tr>
    {/each}

</table>