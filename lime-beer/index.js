var Task = require('./Task'),
    Step = require('./Step'),
    task;

task = new Task({ name: 'Task One' });

task.on('stepadded', function(task, step){
    console.log('Step added: ' + step.getName() + ' on task: ' + task.getName());
});

task.addSteps([
    new Step({ name: 'Step 1' }),
    new Step({ name: 'Step 2' }),
    new Step({ name: 'Step 3' })
]);

task.getSteps().forEach(function(step){
    step.on('execute', function(executed){
        console.log(executed.getName() + ' has been executed');
    });
});

task.run();
