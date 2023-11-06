<h3>Opret bruger</h3>
<form action="/auth/signup" method="post">
    <label for="username">Brugernavn</label>
    <input type="text" name="username" placeholder="Dit brugernavn" value="admin" required>

    <br />

    <label for="password">Kodeord</label>
    <input type="password" name="password" placeholder="Dit kodeord" value="123456" required>

    <br />

    <label for="password">Gentag kodeord</label>
    <input type="password" name="password" placeholder="Dit kodeord" value="123456" required>
    <br />

    <button>Opret</button>

</form>