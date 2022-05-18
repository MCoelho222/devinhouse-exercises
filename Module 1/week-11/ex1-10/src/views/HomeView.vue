<template>
<div class="container">
<h1>Home</h1>
<p>This an application for professors to subscribe students in a course.</p>
<p>Here is a brief explanation:</p>
<p>It has 3 functionalities.</p>
<p>To use this functionalities, the professor must be registered, and then make login.</p>
<p>Once registered, this functionalities will be available:</p>
<div id="list" >
    <ul style="list-style-type: none;">
        <li>Subscribe a student in the course, entering with the name, birth date, and Brazilian CEP.</li>
        <li>A list of all the subscriptions. Here it is allowed to delete or update students information.</li>
        <li>A "find-student" engine by student ID (an integer number).</li>
    </ul>
</div>

<p></p>
<router-link to="/login">Go to application</router-link>
</div>
</template>
